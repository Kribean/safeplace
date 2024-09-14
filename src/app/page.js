import { Footer } from "@/components/mine/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ContainerBlogAccueil } from "@/components/ui/ContainerBlogAccueil";
import Image from "next/image";
import "./globals.css";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { bodoniModa } from "./layout";

export default async function Home() {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      summary: true,
      likes: true,
      numberOfComments: true,
      keywords: true,
      isForMale: true,
      isForFemale: true,
      thematic: true,
      comments: true,
    },
    take: 3, // Récupère les 3 premiers articles
    orderBy: {
      createdAt: "desc", // Trie par ordre décroissant (du plus récent au plus ancien)
    },
  });

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pb-4">
        <div className="flex flex-col h-screen bg-gradient-to-r from-red-200 via-red-200 to-red-300 w-full justify-center items-center">
          <div className="w-fit">
            <div className="flex flex-row justify-center lg:justify-start items-center w-full p-4">
              <Image
                src={"/images/logo_fertikoze.svg"}
                width={200}
                height={200}
                alt="logo fertikoze"
              />
              <p>FertiKozé</p>
            </div>
            <h1
              className={bodoniModa.className+
                " text-4xl lg:text-6xl  text-center protest-guerrilla-regular mx-2 "
              }
            >
              Soutenir les couples confrontés aux défis de la conception
            </h1>
          </div>
          <Link href={"/blog"}>
            <Button>Accéder à tous les articles</Button>
          </Link>
        </div>
        <ContainerBlogAccueil blogData={articles} />
      </main>
      <Footer />
    </>
  );
}

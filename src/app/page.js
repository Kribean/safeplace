import { Footer } from "@/components/mine/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ContainerBlogAccueil } from "@/components/ui/ContainerBlogAccueil";
import Image from "next/image";
import "./globals.css"

export default function Home() {
  const blogData = [
    {
      id: 1,
      title: "Les défis de la PMA en France",
      description: "Découvrez les défis rencontrés par les couples en parcours de PMA en France, ainsi que les solutions disponibles pour surmonter ces obstacles.",
      nbrOfLike: 15,
      isMale: true,
      isFemale: true,
      keywords: ["PMA", "France", "Fertilité"],
    },
    {
      id: 2,
      title: "L'impact psychologique de l'infertilité chez les hommes",
      description: "Une exploration des effets psychologiques de l'infertilité sur les hommes et des moyens pour trouver du soutien et surmonter ces défis.",
      nbrOfLike: 25,
      isMale: true,
      isFemale: false,
      keywords: ["Infertilité", "Psychologie", "Support"],
    },
    {
      id: 3,
      title: "Adopter en Martinique : Le processus expliqué",
      description: "Un guide détaillé sur le processus d'adoption en Martinique, incluant les étapes, les défis et les ressources disponibles pour les futurs parents.",
      nbrOfLike: 30,
      isMale: false,
      isFemale: true,
      keywords: ["Adoption", "Martinique", "Famille"],
    }
  ];
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pb-4">
        <div className="flex flex-col h-screen bg-gradient-to-r from-red-200 via-red-200 to-red-300 w-full justify-center items-center">
          <div className="w-fit">
            <div className="flex flex-row justify-center lg:justify-start items-center w-full p-4">
              <Image src={"/images/logo.png"} width={100} height={100} />
              <p>FertiKozé</p>
            </div>
            <h1
              className={
                "text-6xl font-extrabold text-center protest-guerrilla-regular"
              }
            >
              Soutenir les couples confrontés aux défis de la fertilité
            </h1>
          </div>
          <Button>S'inscrire à la newsletter</Button>
        </div>
        <ContainerBlogAccueil blogData={blogData} />
      </main>
      <Footer/>
    </>
  );
}

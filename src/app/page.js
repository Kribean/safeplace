import { Footer } from "@/components/mine/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ContainerBlogAccueil } from "@/components/ui/ContainerBlogAccueil";
import { Bodoni_Moda } from "next/font/google";
import Image from "next/image";
const bodoni = Bodoni_Moda({
  weight: "400",
  preload: false,
});
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pb-4">
        <div className="flex flex-col h-screen bg-gradient-to-r from-red-200 via-red-200 to-red-300 w-full justify-center items-center">
          <div className="w-fit">
            <div className="flex flex-row justify-center lg:justify-start items-center w-full p-4">
              <Image src={"/images/logo.png"} width={100} height={100} />
              <p>A Safe Place</p>
            </div>
            <h1
              className={
                "text-6xl font-extrabold text-center " + bodoni.className
              }
            >
              Soutenir les couples confrontés aux défis de la fertilité
            </h1>
          </div>
          <Button>S'inscrire à la newsletter</Button>
        </div>
        <ContainerBlogAccueil />
      </main>
      <Footer/>
    </>
  );
}

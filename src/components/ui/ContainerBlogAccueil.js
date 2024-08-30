import { Button } from "./button";
import { CardBlog } from "../mine/CardBlog";
import Image from "next/image";

export const ContainerBlogAccueil = async () => {
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
    <diV className="container gap-4 flex flex-col items-center pt-4  ">
      <h2 className="text-2xl">Nos articles les plus récents</h2>
      <div className="flex flex-wrap lg:flex-row justify-center gap-4">
        <Button><Image src={"/images/female.svg"} width={16} height={16} className="lg:h-8 lg:w-8" />
        <p className="hidden lg:block">Dédiés aux femmes</p>
        </Button>
        <Button><Image src={"/images/female.svg"} width={16} height={16} className="lg:h-8 lg:w-8" />
        <p className="hidden lg:block">Tous les articles
          </p><Image src={"/images/male.svg"} width={16} height={16} className="lg:h-8 lg:w-8" /></Button>
        <Button>
        <p className="hidden lg:block">
          Dédiés aux hommes
          </p>
          <Image src={"/images/male.svg"} width={16} height={16} className="lg:h-8 lg:w-8" /></Button>
      </div>

      <div className="flex flex-wrap justify-center gap-0.5">
       {blogData?.map((e,index)=>{
        return <CardBlog 
        id={e.id} 
        title={e.title}
        description={e.description}
        nbrOfLike={e.nbrOfLike} 
        isMale={e.isMale} 
        isFemale={e.isFemale} 
        keywords={e.keywords} />
       })}
      </div>
    </diV>
  );
};

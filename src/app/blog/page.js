import { SearchBar } from "@/components/mine/SearchBar";
import { ContainerAllBlogCard } from "@/components/ui/ContainerAllBlogCard";
import { Separator } from "@radix-ui/react-separator";

const AllBlogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Les défis de la PMA en France",
      description:
        "Découvrez les défis rencontrés par les couples en parcours de PMA en France, ainsi que les solutions disponibles pour surmonter ces obstacles.",
      nbrOfLike: 15,
      isMale: true,
      isFemale: true,
      keywords: ["PMA", "France", "Fertilité"],
    },
    {
      id: 2,
      title: "L'impact psychologique de l'infertilité chez les hommes",
      description:
        "Une exploration des effets psychologiques de l'infertilité sur les hommes et des moyens pour trouver du soutien et surmonter ces défis.",
      nbrOfLike: 25,
      isMale: true,
      isFemale: false,
      keywords: ["Infertilité", "Psychologie", "Support"],
    },
    {
      id: 3,
      title: "Adopter en Martinique : Le processus expliqué",
      description:
        "Un guide détaillé sur le processus d'adoption en Martinique, incluant les étapes, les défis et les ressources disponibles pour les futurs parents.",
      nbrOfLike: 30,
      isMale: false,
      isFemale: true,
      keywords: ["Adoption", "Martinique", "Famille"],
    },
  ];
  return (
    <>
      <div className="flex min-h-screen flex-col justify-start w-full pb-4 mt-[100px]">
        <div className="flex flex-row pt-4 pb-[100px] items-center justify-center">
          <h1 className="text-2xl lg:text-6xl">Fertikozé: Blog</h1>
          <Separator />
        </div>
        <SearchBar />

        <ContainerAllBlogCard blogData={blogData}>
          <h2 className="text-2xl">Tous les articles</h2>
        </ContainerAllBlogCard>
      </div>
    </>
  );
};

export default AllBlogs;

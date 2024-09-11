import { ContainerAllBlogCard } from "@/components/ui/ContainerAllBlogCard";
import { Separator } from "@radix-ui/react-separator";

const AllBlogs = async () => {
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
      thematic: true
    },
    orderBy: {
      createdAt: 'desc', // Trie par ordre décroissant (du plus récent au plus ancien)
    },
  });
  return (
    <>
      <div className="flex min-h-screen flex-col justify-start w-full pb-4 mt-[100px]">
        <div className="flex flex-row pt-4 pb-[100px] items-center justify-center">
          <h1 className="text-2xl lg:text-6xl">Fertikozé: Blog</h1>
          <Separator />
        </div>
        <ContainerAllBlogCard blogData={articles}>
          <h2 className="text-2xl">Tous les articles</h2>
        </ContainerAllBlogCard>
      </div>
    </>
  );
};

export default AllBlogs;

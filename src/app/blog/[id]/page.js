import Image from "next/image";
import prisma from "@/lib/prisma";
import { ContainerAllowArticle } from "@/components/mine/ContainerAllowArticle";
import { bodoniModa } from "@/app/layout";
const Blog = async ({ params }) => {
  const { id } = params;
  const result = await prisma.article.findUnique({
    where: {
      id,
    },
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
      createdAt: true,
      comments: true,
      author: true,
      content: true,
    },
  });

  return (
    <main className="container flex min-h-screen flex-col items-center gap-4 w-full pb-4 pt-[100px]">
      <div className="flex flex-col justify-start items-start w-full">
        <p className="text-md">
          {new Date(result.createdAt).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="text-md">Pseudonyme: {result.author || "Anonyme972"} </p>
      </div>
      <h1 className={bodoniModa.className+" text-6xl font-extrabold "}>{result.title}</h1>
      <div className="w-full h-[500px] flex flex-row justify-center">
        <Image
          src={"/images/family-photo.png"}
          height={400}
          width={800}
          className="object-cover"
          alt="illustration famille"
        />
      </div>
      <article>
        <aside>
          <p>{result.summary}</p>
        </aside>
      </article>
      <ContainerAllowArticle id={id} result={result} />
    </main>
  );
};

export default Blog;

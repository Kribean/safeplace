import { ContainerComments } from "@/components/mine/ContainerComments";
import Image from "next/image";

const Blog = async({ params }) => {
  const { id } = params;
  const result = await prisma.article.findUnique({
    where: {
      id ,
    },
    select:{
      id: true,
      title: true,
      summary: true,
      likes: true,
      numberOfComments: true,
      keywords: true,
      isForMale: true,
      isForFemale: true,
      thematic: true,
      createdAt:true,
      comments:true,
      author:true,
      content:true
    }
  })

const tabComments = [
  {
    author: "Sophie R.",
    content:
      "Merci pour cet article. En tant que femme ayant traversé un parcours de PMA, je confirme que l'aspect émotionnel est souvent sous-estimé. Le soutien psychologique devrait être une priorité pour tous les couples qui envisagent ce chemin.",
  },
  {
    author: "Jean-Marc D.",
    content:
      "L'accès à la PMA est vraiment un problème en France. Les délais d'attente sont interminables, surtout dans les grandes villes. Espérons que les choses s'améliorent bientôt.",
  },
  {
    author: "Claire L.",
    content:
      "Je trouve que l'article aborde très bien les enjeux éthiques et sociaux de la PMA. C'est un sujet complexe qui mérite plus de discussions publiques et d'ouverture d'esprit.",
  },
  {
    author: "David M.",
    content:
      "Je suis d'accord avec l'article sur le fait que la PMA peut être une épreuve difficile. J'espère que des solutions seront trouvées pour améliorer l'accessibilité et le soutien aux couples.",
  },
];

    return (
      <main className="container flex min-h-screen flex-col items-center gap-4 w-full pb-4 pt-[100px]">
<div className="flex flex-col justify-start items-start w-full">
<p className="text-md">{new Date(result.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
<p className="text-md">Pseudonyme: {result.author||"Anonyme972"} </p>
</div>
<h1 className="text-6xl font-extrabold">{result.title}</h1>
<div className="w-full h-[500px] flex flex-row justify-center">
<Image src={"/images/family-photo.png"} height={400} width={800} className="object-cover" alt="illustration famille"/>
</div>
<article>
  <aside>
    <p>{result.summary}</p>
  </aside>
</article>
<div dangerouslySetInnerHTML={{ __html: result.content }}/>
<ContainerComments tabComments={tabComments}/>
      </main>
    );
  };
  
  export default Blog;
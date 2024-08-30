import { ContainerComments } from "@/components/mine/ContainerComments";
import Image from "next/image";

const Blog = ({ params }) => {
    const { id } = params;
    const text = `
<h2 class="text-3xl font-bold text-gray-800 mb-4">Les défis de la PMA en France</h2>

<p class="text-gray-700 mb-4">
  La Procréation Médicalement Assistée (PMA) est un recours pour de nombreux couples en France qui éprouvent des difficultés à concevoir un enfant. Cependant, malgré les avancées médicales, la PMA présente plusieurs défis, tant sur le plan médical que sur le plan personnel et social.
</p>

<h3 class="text-2xl font-semibold text-gray-800 mb-3">L'accès à la PMA</h3>
<p class="text-gray-700 mb-4">
  L'un des principaux défis réside dans l'accès à la PMA. Bien que la législation française ait évolué pour permettre à un plus grand nombre de personnes d'accéder à ces techniques, les délais d'attente dans les centres spécialisés restent longs. De plus, les couples doivent souvent faire face à une bureaucratie complexe et à des critères d'éligibilité stricts.
</p>

<h3 class="text-2xl font-semibold text-gray-800 mb-3">Le coût émotionnel et psychologique</h3>
<p class="text-gray-700 mb-4">
  La PMA peut également avoir un coût émotionnel élevé. Les traitements sont souvent longs et éprouvants, avec des résultats incertains. Les couples peuvent ressentir de l'anxiété, du stress, et parfois même un sentiment d'échec. Le soutien psychologique est donc essentiel pour accompagner les couples tout au long de ce processus.
</p>

<h3 class="text-2xl font-semibold text-gray-800 mb-3">Les implications éthiques et sociales</h3>
<p class="text-gray-700 mb-4">
  Enfin, la PMA soulève des questions éthiques et sociales. Les débats autour de la PMA pour toutes les femmes, y compris les femmes célibataires et les couples homosexuels, restent vifs en France. Ces débats touchent à des questions profondes sur la famille, la filiation, et les droits des enfants.
</p>

<p class="text-gray-700">
  En somme, la PMA en France représente un espoir pour de nombreux couples, mais elle s'accompagne de défis importants qui nécessitent un accompagnement adapté et une réflexion éthique approfondie.
</p>
`;

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
<p className="text-md">Lundi 2 Octobre 2021</p>
<p className="text-md">Pseudonyme: Anna245 </p>
</div>
<h1 className="text-6xl font-extrabold">Les défis de la PMA en France</h1>
<div className="w-full h-[500px] flex flex-row justify-center">
<Image src={"/images/family-photo.png"} height={400} width={800} className="object-cover"/>
</div>
<div dangerouslySetInnerHTML={{ __html: text }}/>
<ContainerComments tabComments={tabComments}/>
      </main>
    );
  };
  
  export default Blog;
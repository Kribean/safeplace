import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "A Safe Place - Support et Partage pour les Couples",
  description: "A Safe Place est une plateforme dédiée aux couples hétérosexuels ayant des difficultés à concevoir un enfant. Échangez vos expériences, trouvez du soutien, et connectez-vous avec d'autres couples dans un espace sécurisé et bienveillant.",
  keywords: "infertilité, conception, soutien aux couples, fertilité, témoignages, communauté, aide à la conception",
  author: "Nom de votre équipe ou entreprise",
  robots: "index, follow", // Permet aux moteurs de recherche d'indexer la page
  charset: "UTF-8", // Encodage des caractères
  language: "fr", // Langue principale de la page
  ogTitle: "A Safe Place - Support et Partage pour les Couples",
  ogDescription: "Rejoignez une communauté bienveillante dédiée aux couples ayant des difficultés à concevoir.",
  //ogImage: "/path-to-image.jpg", // Une image représentative pour les réseaux sociaux
  //ogUrl: "https://votre-domaine.com", // URL de votre application
  twitterCard: "summary_large_image", // Type de carte Twitter à afficher
  //twitterSite: "@votre_compte_twitter", // Votre nom d'utilisateur Twitter
};
export default function BlogLayout({ children }) {
  return (
      <section className={monserrat.className}>
          {children}
        </section>
  );
}

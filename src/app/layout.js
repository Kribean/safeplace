import { Montserrat,Bodoni_Moda } from "next/font/google";
import "./globals.css";
import AuthProvider from "../../providers/auth-providers";

const monserrat = Montserrat({ subsets: ["latin"] });
const bodoniModa = Bodoni_Moda({
  weight: ['400', '700'], // Poids disponibles
  subsets: ['latin'],
  display: 'swap',
});

export { monserrat, bodoniModa };
export const metadata = {
  title: "FertiKozé - Support et Partage pour les Couples",
  description: "FertiKozé est une plateforme dédiée aux couples hétérosexuels ayant des difficultés à concevoir un enfant. Échangez vos expériences, trouvez du soutien, et connectez-vous avec d'autres couples dans un espace sécurisé et bienveillant.",
  keywords: "infertilité, conception, soutien aux couples, fertilité, témoignages, communauté, aide à la conception",
  author: "Fertikizé",
  robots: "index, follow", // Permet aux moteurs de recherche d'indexer la page
  charset: "UTF-8", // Encodage des caractères
  language: "fr", // Langue principale de la page
  ogTitle: "FertiKozé - Support et Partage pour les Couples",
  ogDescription: "Rejoignez une communauté bienveillante dédiée aux couples ayant des difficultés à concevoir.",
  //ogImage: "/path-to-image.jpg", // Une image représentative pour les réseaux sociaux
  //ogUrl: "https://votre-domaine.com", // URL de votre application
  twitterCard: "summary_large_image", // Type de carte Twitter à afficher
  //twitterSite: "@votre_compte_twitter", // Votre nom d'utilisateur Twitter
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={monserrat.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}

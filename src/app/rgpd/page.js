import { Footer } from "@/components/mine/Footer";
import { Navbar } from "@/components/Navbar";

export default function RGPD() {

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pb-4 mt-[100px]">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Politique de protection des données</h1>

    <p className="text-gray-600 mb-6">
        La présente politique de protection des données (la "Charte") a été élaborée en vue de définir les engagements de
        protection des données de Fertikoze, conformément au Règlement Général sur la Protection des Données ("RGPD").
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 1 – DÉFINITION</h2>
    <p className="text-gray-600 mb-6">
        Le RGPD concerne le traitement et la circulation des données à caractère personnel. Il vise à protéger les droits
        fondamentaux des personnes physiques et à responsabiliser les acteurs du traitement de ces données.
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 2 – DONNÉES COLLECTÉES</h2>
    <p className="text-gray-600 mb-6">
        Fertikoze collecte uniquement les données suivantes lors de la connexion via un compte Google :
    </p>
    <ul className="list-disc pl-6 mb-6 text-gray-600">
        <li>Email</li>
        <li>Image de profil</li>
        <li>Pseudonyme</li>
    </ul>
    <p className="text-gray-600 mb-6">
        Ces données sont utilisées uniquement pour la gestion des connexions et pour l'affichage des profils sur le site.
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 3 – ANONYMAT DES BLOGS ET COMMENTAIRES</h2>
    <p className="text-gray-600 mb-6">
        Les publications sur notre blog ainsi que les commentaires sont totalement anonymisés pour encourager la liberté
        d'expression. Toutefois, les utilisateurs doivent veiller à ne pas divulguer d'informations pouvant révéler leur
        identité dans les commentaires.
    </p>

    <p className="text-gray-600 mb-6">
        En cas de divulgation accidentelle d'informations personnelles dans un commentaire, l'utilisateur peut nous
        contacter pour demander le retrait du commentaire concerné.
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 4 – SUPPRESSION DES DONNÉES</h2>
    <p className="text-gray-600 mb-6">
        Pour toute demande de suppression de données personnelles (email, image, pseudonyme), l'utilisateur peut nous
        contacter directement via notre formulaire de contact.
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 5 – SÉCURITÉ DES DONNÉES</h2>
    <p className="text-gray-600 mb-6">
        Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité de
        vos données personnelles. Les données collectées ne sont ni cédées, ni louées, ni échangées à des tiers.
    </p>

    <h2 className="text-2xl font-bold text-gray-700 mb-4">ARTICLE 6 – ENTRÉE EN VIGUEUR</h2>
    <p className="text-gray-600">
        La présente Charte entre en vigueur dès sa publication sur le site Fertikoze.
    </p>
</div>

      </main>
      <Footer/>
    </>
  );
}

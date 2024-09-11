import { Footer } from "@/components/mine/Footer";
import { Navbar } from "@/components/Navbar";

export default function QuiSommesNous() {

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pb-4 mt-[100px]">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Présentation de Fertikoze</h1>

    <p className="text-xl font-semibold text-gray-700 mb-2">Fertikozé</p>
    <p className="italic text-gray-600 mb-4">"Ka sa yé?"</p><p className="italic text-gray-600 mb-4">"Qu’est-ce donc"</p>

    <p className="text-gray-600 mb-6">
        Fertikozé est un site sur lequel vous pourrez naviguer et qui aborde le sujet de la fertilité. Nous aurons pour but premier
        d’aborder les problématiques autour de la conception.
    </p>

    <p className="text-gray-600 mb-6">
        À l’origine de Fertikozé, il s’agissait d’une discussion entre amis sur les jeunes des Antilles impactés par les difficultés
        de procréer. Il y aurait tellement de choses à dire sur la conception. Alors pourquoi ne pas formaliser tout ça et partager
        les connaissances et les expériences des uns et des autres... et qui sait ? Peut-être même apporter du soutien à des couples
        qui essaient d’avoir des enfants ou qui ne peuvent en avoir.
    </p>

    <p className="text-gray-600 mb-6">
        Ainsi, nous nous pencherons sur le vécu de personnes et couples, désirant un/des enfant.s, et pour qui, le parcours n’est
        pas si évident. Vous pourrez découvrir les témoignages de ceux qui ont bien voulu accepter de partager leur histoire autour
        de ce sujet qui est encore si tabou au sein de notre culture, aux Antilles-Guyane.
    </p>

    <p className="text-gray-600 mb-6">
        Pourtant, à travers nos rencontres et nos échanges avec des personnes, nous nous sommes aperçus que de nombreux couples sont
        concernés par le désir d’enfanter, mais n’y parviennent pas si simplement ; un désir naturel qui relève pourtant du défi pour
        certains. C’est pour cette raison que nous avons tenu à créer ce site.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mb-4">Nos objectifs :</h2>
    <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Libérer la parole des antillais et guyanais sur le sujet</li>
        <li>Donner la parole aux principaux concernés</li>
        <li>Décomplexer cette parole</li>
        <li>Que les couples/personnes concernés se sentent moins isolés</li>
        <li>Informer nos lecteurs par l’évocation de quelques notions</li>
        <li>Savoir ce qu’il existe à proximité de chez nous afin d’être bien orienté, conseillé et pris en charge si besoin</li>
    </ul>
</div>

      </main>
      <Footer/>
    </>
  );
}

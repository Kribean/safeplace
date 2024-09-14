import Image from "next/image";

export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="flex flex-col justify-center items-center w-full h-screen">
        <p className="text-lg font-bold">Chargement ...</p>
        <Image
              src={"/images/logo_fertikoze.svg"}
              width={50}
              height={50}
              alt="FertiKoze"
            />

    </div>
  }
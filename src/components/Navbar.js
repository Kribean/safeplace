"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";

export const Navbar = () => {

    const {data:session}=useSession();
    const handleLogin=()=>{
        signIn("google",{ callbackUrl: "/" })
    

    }
  return (
    <div className="flex flex-row justify-between w-full fixed top-0 left-0 bg-red-200 p-4 z-50">
      <nav className="flex flex-row justify-between ">
        <Link href="/">
          <Button className={"bodoni text-lg"}>FertiKozé</Button>
        </Link>
      </nav>
      <div className="lg:flex flex-row gap-2 w-full justify-end lg: hidden ">
      {session?.user?<Button variant="destructive" onClick={()=>{}}>Se Déconnecter</Button>
            :<Button  onClick={()=>{handleLogin()}}>Se Connecter</Button>
            }
      <Avatar >
  <AvatarImage src={session?.user?.image} alt="image utilisateur" className="w-10 h-10 rounded-full" />
  <AvatarFallback>avatar</AvatarFallback>
</Avatar>
      </div>
<div className="block lg:hidden">
<Sheet>
        <SheetTrigger asChild>
<div className="flex flex-row gap-2">
{session?.user?.image && <Avatar className="h-10 w-10">
  <AvatarImage src={session?.user?.image} alt="image utilisateur" className="w-10 h-10 rounded-full"/>
  <AvatarFallback>avatar</AvatarFallback>
</Avatar>}
<Button variant="outline">
            <AlignJustify />
          </Button>

</div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Bienvenue sur FertiKozé.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-row items-center gap-4">
              <Link href={"/blog"}>
              <Button>Blog</Button>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
            <Button>S'inscrire à la mailing list</Button>
            </div>
            <div className="flex flex-row items-center gap-4">
            {session?.user?<Button variant="destructive" onClick={()=>{}}>Se Déconnecter</Button>
            :<Button  onClick={()=>{handleLogin()}}>Se Connecter</Button>
            }
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button >Nous contacter</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
</div>
    </div>
  );
};

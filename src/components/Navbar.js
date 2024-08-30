import { Button } from "./ui/button";
import { Bodoni_Moda } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "400",
  preload: false,
});
export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-full fixed top-0 left-0 bg-red-200 p-4 z-50">
      <nav className="flex flex-row justify-between ">
        <Link href="/">
          <Button className={bodoni.className}>FertiKozé</Button>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <AlignJustify />
          </Button>
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
            <Button>Se Connecter</Button>
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
  );
};

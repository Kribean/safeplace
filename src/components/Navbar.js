"use client";
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
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { NavMenuComp } from "./mine/NavMenuComp";
import { NavMenuSmallScreenComp } from "./mine/NavMenuSmallScreenComp";

export const Navbar = () => {
  const { data: session } = useSession();
  const handleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handleLogout = () => {
    signOut();
  };
  return (
    <div className="flex flex-row justify-between items-center w-full fixed top-0 left-0 bg-red-200 p-4 z-50">
      <div className="lg:flex flex-row gap-2 w-full justify-start lg: hidden">
        <NavMenuComp />
        {session?.user ? (
          <Button
            variant="destructive"
            onClick={() => {
              handleLogout();
            }}
          >
            Se Déconnecter
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleLogin();
            }}
          >
            Se Connecter
          </Button>
        )}
        {session?.user?.image && (
          <Avatar>
            <AvatarImage
              src={session?.user?.image}
              alt="image utilisateur"
              className="w-10 h-10 rounded-full"
            />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div className="block lg:hidden  ">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-row gap-2">
              {session?.user?.image && (
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={session?.user?.image}
                    alt="image utilisateur"
                    className="w-10 h-10 rounded-full"
                  />
                  <AvatarFallback>avatar</AvatarFallback>
                </Avatar>
              )}
              <Button variant="outline">
                <AlignJustify />
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Bienvenue sur FertiKozé.</SheetDescription>
            </SheetHeader>

            <div className="grid gap-4 py-4 ">
              <div className="flex flex-row items-center gap-4">
                <Button>S'inscrire à la mailing list</Button>
              </div>
              <div className="flex flex-row items-center gap-4">
                {session?.user ? (
                  <Button
                    variant="destructive"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Se Déconnecter
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Se Connecter
                  </Button>
                )}
              </div>
              <NavMenuSmallScreenComp />
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://forms.gle/uryyRBa27KM3zjfi7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Votre expérience avec la PMA</Button>
                  </a>
                  <a
                    href="https://forms.gle/F68eNmonoA8wgEQF9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Nous contacter</Button>
                  </a>
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="flex flex-row justify-between ">
        <Link href="/">
          <Button variant="accent" className={"bodoni text-lg border"}>
            <Image
              src={"/images/logo_fertikoze.svg"}
              width={50}
              height={50}
              alt="FertiKoze"
            />
            FertiKozé
          </Button>
        </Link>
      </nav>
    </div>
  );
};

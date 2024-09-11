"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"


export function NavMenuComp() {
  return (
    <NavigationMenu>
      <NavigationMenuList >
        <NavigationMenuItem  >
          <NavigationMenuTrigger >Témoignages</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={"/images/logo_fertikoze.svg"} width={200} height={200} alt="logo fertikoze" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Tous les articles
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Accéder à tous les articles et témoignages
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Dédiés aux femmmes">
              Découvrez la section blog spécialement dédiée aux femmes.
              </ListItem>
              <ListItem href="/" title="Dédiés aux hommes">
              Découvrez la section blog spécialement dédiée aux femmes.
              </ListItem>
              <ListItem href="https://forms.gle/uryyRBa27KM3zjfi7" target="_blank" rel="noopener noreferrer" title="Votre expérience avec la PMA">
              Votre expérience pourrait être une précieuse source d’inspiration pour d’autres couples ! Nous vous garantissons l'anonymat et nous nous occuperons de la mise en forme de votre texte pour qu'il s'intègre parfaitement à notre blog.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>À propos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
            <ListItem href="/qui-sommes-nous" title="Qui sommes-nous">
              Découvrez les fondateurs de Fertikoze
              </ListItem>
              <ListItem href="/rgpd" title="Protection des données - RGPD">
              Informations sur comment le site gère les données
              </ListItem>
              <ListItem href="https://forms.gle/F68eNmonoA8wgEQF9" target="_blank" rel="noopener noreferrer" title="Envoyer un mail" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

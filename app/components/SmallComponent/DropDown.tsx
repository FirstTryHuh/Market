"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu"

export function DropDown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <div className="min-w-full border-2 rounded-md">
            <NavigationMenuTrigger><div className="w-21">Popular</div></NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="flex flex-col w-30">
                    <ListItem href="/product/popular" title="Popular"/>
                    <ListItem href="/product/New" title="New & Noteworthy"/>
                    </ul>
                </NavigationMenuContent>
            </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex-inline flex-col gap-1 text-sm">
            <div className="leading-none font-small">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default DropDown;
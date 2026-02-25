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
  navigationMenuTriggerStyle,
} from "./navigation-menu"

const FrequentItem = () => {
    const List=[
"Lightning deals",
"Customers' Most-Loved",
"Outlet",
"Beauty",
"Fashion",
"Home",
"Toys & Games",
"Electronics",
"Devices",
"Kitchen",
"Everyday Essentials",
"Amazon Brands",
"Computers & Accessories",
"Pet Supplies",
"Furniture",
"TVs & Accessories",
"Home DIY & Appliances",
"Sports & Outdoors",
"Grocery",
"Health & Household",
"Cell Phones & Accessories",
"Small Business",
"Video Games",
"Lawn & Garden",
"Automotive",
"Camera & Photo",
"Books",
"Jewelry",
"Baby",
"Office Supplies",
"Musical Instruments",
"Coupons"]
    function MakeItem(props:{href:String}){
        return<div className="flex p-2 text-sm leading-none"><Link href={"/product/"+props.href}><NavigationMenuItem>{props.href}</NavigationMenuItem></Link></div>
    }
  return (
    <NavigationMenu>
            <NavigationMenuList>
                {List.map((item,index)=><MakeItem key={index} href={item}/>)}
            </NavigationMenuList>
    </NavigationMenu>
  )
}

export default FrequentItem
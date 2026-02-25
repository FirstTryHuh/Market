import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/app/components/SmallComponent/navigation-menu"
import Link from "next/link"
import ListHead from "./ListHead"

const Navigation = () => {
    function MakeHead(item:{href:string,text:string}){
    return(
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={item.href}>{item.text}</Link>
    </NavigationMenuLink>
)}

  return (
  <NavigationMenu ><NavigationMenuList><NavigationMenuItem>
    {ListHead.map((item,index)=><MakeHead {...item} key={index}/>)}
</NavigationMenuItem></NavigationMenuList></NavigationMenu>
  )
}

export default Navigation
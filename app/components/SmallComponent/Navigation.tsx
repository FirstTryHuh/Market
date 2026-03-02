import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/app/components/SmallComponent/navigation-menu"
import ListHead from "./ListHead"

const Navigation = () => {
    function MakeHead(item:{href:string,text:string}){
    return(
    <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
        {item.text}
    </NavigationMenuLink>
)}

  return (
  <NavigationMenu ><NavigationMenuList><NavigationMenuItem>
    {ListHead.map((item,index)=><MakeHead {...item} key={index}/>)}
</NavigationMenuItem></NavigationMenuList></NavigationMenu>
  )
}

export default Navigation
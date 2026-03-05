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
    <NavigationMenuLink href={item.href} className="text-xl shrink min-w-0 overflow-hidden group inline-flex whitespace-nowrap h-9 items-center justify-center rounded-md bg-background px-4 py-2 font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">
        {item.text}
    </NavigationMenuLink>
)}

  return (
  <NavigationMenu><NavigationMenuList>
    {ListHead.map((item,index)=><NavigationMenuItem key={index}><MakeHead {...item}/></NavigationMenuItem>)}
  </NavigationMenuList></NavigationMenu>
  )
}

export default Navigation
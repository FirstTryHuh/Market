"use client"
import style from "../css/Product.module.css"
import Link from "next/link"

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
    function MakeItem(props:{href:string}){
        return <div className={style.item}><Link href={"/search/"+props.href}>{props.href}</Link></div>
    }
  return (
    <div className={style.frequentWrapper}>
      <div className={style.Blur}></div>
      <div className={style.holder}>
        {List.map((item,index)=><MakeItem key={index} href={item}/>)}
      </div>
      <div className={style.Blur2}></div>
    </div>
  )
}

export default FrequentItem

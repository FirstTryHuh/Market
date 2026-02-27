'use client'
import { DropdownMenu } from "radix-ui"
import DropDown from "../SmallComponent/DropDown"
import FrequentItem from "../SmallComponent/FrequentItem"
import style  from "../css/Product.module.css"
import Description from "../SmallComponent/Description"
import Detail from "../SmallComponent/Detail"

const Product = () => {
  const ProductList=[{
    src:"",
    name:"",
    author:"",
    seen:0,
    like:0,
  }]
  return (
    <div className="bg-white border-t-1 border-gray-300 pt-3">
      <div className={style.Hold}>
        <div className={style.holder2}>
          <DropDown/>
          <FrequentItem/>
        </div>
        <div className={style.holder3}>
          <Description/>
        </div>
      </div>
    </div>
  )
}

export default Product
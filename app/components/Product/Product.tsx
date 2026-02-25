import { DropdownMenu } from "radix-ui"
import DropDown from "../SmallComponent/DropDown"
import FrequentItem from "../SmallComponent/FrequentItem"

const Product = () => {
  const ProductList=[{
    src:"",
    name:"",
    author:"",
    seen:0,
    like:0,
  }]
  return (
    <div>
      <div className="flex flex-row">
      <DropDown/>
      <FrequentItem/>
      </div>
    </div>
  )
}

export default Product
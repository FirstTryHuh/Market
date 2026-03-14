import { DropdownMenu } from "radix-ui"
import DropDown from "../SmallComponent/DropDown"
import FrequentItem from "../SmallComponent/FrequentItem"
import style  from "../css/Product.module.css"
import Description from "../SmallComponent/Description"

const Product = (props:{Name:string}) => {
  return (
    <div className={style.Back}>
      <div className={style.Hold}>
        <div className="overflow-hidden w-11/12 col-end-3">
          <div className={style.holder2}>
            <DropDown/>
            <FrequentItem/>
          </div>
          <div className={style.holder3}>
            <Description Name={props.Name}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
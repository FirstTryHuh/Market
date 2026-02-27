import { JSX } from "react";
import style from "../css/Detail.module.css"
import TestingList from "./Details"

export default function Detail({num}:{num:number}):JSX.Element{
  const item=TestingList[num];
  function Heart(){
    return(
      <div className={style.icon2}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" role="img" aria-hidden="true">
          <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    )
  }
  function MakeSmallWindow(props:typeof TestingList[0]){
    return(
      <div >
      <div className={style.Grid}>
        <div className={`${style.Img} ${style.First}`}>
          <div className="col-span-full  row-span-full flex justify-center"><img className="z-0 w-8/10" src={props.img} alt="" /></div>
          
            <div className={style.icon}>
              {props.like}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" role="img" aria-hidden="true">
                <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
        
        </div>

        {/* side bar */}
        <div className={style.Last}>
          <div className={style.name} >{props.name.substring(0,60)+"..."}</div>
          <div className={style.cost}><div className=" font-light text-gray-500">VND </div>{props.cost}đ
          <Heart/>
          </div> 
          <div className="flex items-center border-b-gray-800 border-b-1 pb-4">Quantity: <input className={style.quantity} type="text" placeholder="    1"></input> <div className={style.quantity2}> Only {props.quantity} available</div></div> 
          <div className={style.buyNow}>Buy now</div>
          <div className={style.addToCart}>Add to cart</div>
      </div>
        <div className={style.Full}>
          <a href="seller" className={style.author} >{props.author}</a>
          <div className={style.name} >About this product</div>
          <div className={style.Info} >{props.productInfo}</div>
          </div>
      </div>
        </div>
    )}
  return (<div>
      {<MakeSmallWindow {...item} key={num}/>}
    </div>)
  
}

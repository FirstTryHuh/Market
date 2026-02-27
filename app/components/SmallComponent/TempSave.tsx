import style from "../css/Detail.module.css"
import TestingList from "./Details"

const Detail = () => {
  function MakeSmallWindow(props:Record<string,string>){
    return(
      <div className={style.Grid}>
        <div className={`${style.Img} ${style.First}`}><img className="w-full" src={props.img} alt="" /></div>

        {/* side bar */}
        
        <div className={`${style.name} ${style.Middle}`}>{props.name}</div>
        <a href="seller" className={`${style.author} ${style.Middle}`}>{props.author}</a>
        <div className={`${style.like} ${style.Middle}`}>like</div>
        <div className={`${style.likes} ${style.Middle}`}>{props.likes}</div>

        <div className={`${style.Bor} ${style.Middle}`}/>

        <div className={`${style.name} ${style.Middle}`}>About this product</div>
        <div className={`${style.Info} ${style.Middle}`}>{props.productInfo}</div>
        {/* under bar */}
        <div className={`${style.cost} ${style.Last}`}>{props.cost}</div>  
        <div className={`${style.addToCart} ${style.Last}`}>Add to cart</div>
        <div className={`${style.quantity} ${style.Last}`}><input type="text" placeholder="1"></input></div>
        <div className={`${style.buyNow} ${style.Last}`}>Buy now</div>
      </div>
    )}
  return (
    <div>
      {TestingList.map(MakeSmallWindow)}
    </div>
  )
}

export default Detail
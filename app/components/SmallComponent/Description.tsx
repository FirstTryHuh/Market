
import Link from "next/link";
import style from "../css/Product.module.css"
const formatCompact = (number:any) => {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1 // Optional: 7000 -> 7k, 7500 -> 7.5k
  }).format(number).toLowerCase(); // lowerCase to get 'k' instead of 'K'
};

const Description = () => {
  const TestingList=[{
    id:0,
    img:"https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=400x300&vertical=center",
    imgset:"https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=450x338&vertical=center 450w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=700x525&vertical=center 700w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=800x600&vertical=center 800w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=840x630&vertical=center 840w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=1000x750&vertical=center 1000w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=1200x900&vertical=center 1200w",
    name:"Style Exploration #4 airplane ariport booking branding hotel illustration luggage travel vacation",
    author:"Julian Burford",
    authorImg:"https://cdn.dribbble.com/users/19849/avatars/small/b9d66b328b98675741787e00bdf56375.png?1733740394",
    save:"10",
    like:"59",
    seen:"7000",
    cost:"1000000",
    quantity:"1",
    productInfo:"Just a web",
  },{
    id:1,
    img:"https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=400x300&vertical=center",
    imgset:"https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=450x338&vertical=center 450w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=700x525&vertical=center 700w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=800x600&vertical=center 800w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=840x630&vertical=center 840w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=1000x750&vertical=center 1000w, https://cdn.dribbble.com/userupload/46850869/file/cb44d7e9667ebd005db8b985a95cbe0c.png?format=webp&resize=1200x900&vertical=center 1200w",
    name:"Style Exploration #4 airplane ariport booking branding hotel illustration luggage travel vacation",
    author:"Julian Burford",
    authorImg:"https://cdn.dribbble.com/users/19849/avatars/small/b9d66b328b98675741787e00bdf56375.png?1733740394",
    save:"10",
    like:"59",
    seen:"7000",
    cost:"1000000",
    quantity:"1",
    productInfo:"Just a web",
  }]
  function MakeSmallWindow(props: typeof TestingList[0]){
    
    return(
      <Link href={"/product/"+String(props.id)}>
      <div className={style.BigWindow}>
        <div className={style.Window}>
            <div className={style.Gridd}>
              <a href={style.img} className={style.Mask} >
              <div className={style.Mask2}>
                <div className={style.textss}>{(()=>{return props.name.substring(0,20)})()+"..."}</div>
                <div className="flex">
                  <div className={style.icon2}><img src="/add-to-cart.png" alt="" width={20} height={20} /></div>
                  <div className={style.icon2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" role="img" aria-hidden="true">
                      <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
              </a>
              <img className={style.image} srcSet={props.imgset} src={props.img}  alt="" />
            </div>
        </div>
        <div className="flex justify-between w-12/12">
          <div className={style.textss}>{props.author}</div>
        <div className="flex">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true" className={style.icon}>
                <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button> 
            <div className={style.textss}>{formatCompact(Number(props.like))}</div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true" >
                <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
              </svg>
            </button>
            <div className={style.textss}>{formatCompact(Number(props.seen))}</div>
          </div>
        </div>
      </div>
      </Link>
    )
  }
  return (
    <div className={style.Board}>
      {TestingList.map((item,id)=><MakeSmallWindow key={id} {...item}/>)}
    </div>
  )
}

export default Description
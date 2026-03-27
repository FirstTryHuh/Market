import { prisma } from "@/lib/db"
import Link from "next/link";
import style from "../css/Product.module.css"

const formatCompact = (number: number) => { return new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short", maximumFractionDigits: 1 }).format(number).toLowerCase(); };

interface List {
  id: number;
  AuthorId: number;
  img: string;
  imgPublicId: string;
  name: string;
  author: string;
  authorImg: string;
  like: number;
  seen: number;
}

export default async function Description(props: { Name: string }) {
  let TestingList;
  if (props.Name.length === 0) {
    TestingList = await prisma.list.findMany()
  } else {
    TestingList = await prisma.list.findMany({ where: { name: { startsWith: props.Name, mode: 'insensitive' } } })
  }
  function MakeSmallWindow(props: List) {

    return (
      <Link className={style.BigWindow} href={"/product/" + String(props.id)}>
        <div className={style.Window}>
          <div className={style.Gridd}>
            <div className={style.Mask} >
              <div className={style.Mask2}>
                <div className={style.textss}>{(() => { return props.name.substring(0, 20) })() + "..."}</div>
                <div className="flex">
                  <div className={style.icon2}><img src="/add-to-cart.png" alt="" width={20} height={20} /></div>
                  <div className={style.icon2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" role="img" aria-hidden="true">
                      <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img className={style.image} src={props.img} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center w-12/12 h-4 overflow-hidden text-nowrap">
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
      </Link>
    )
  }
  return (
    <div className={style.Board}>
      {TestingList.map((item, id) => <MakeSmallWindow key={id} {...item} />)}
    </div>
  )
}
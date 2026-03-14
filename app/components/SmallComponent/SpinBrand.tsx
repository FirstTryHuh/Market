import { useEffect, useState } from "react";
import style from "../css/footer.module.css";
import GetFoot from "../actions/SomeChanges";

const SpinBrand = () => {
    interface item {
    id: number;
    AuthorId: number;
    img: string;
    imgPublicId: string;
    name: string;
    author: string;
    authorImg: string;
    like: number;
    seen: number;
    cost: number;
    quantity: number;
    productInfo: string;
    }

    const[FootList,setFoot]=useState<any>(null);
    useEffect(()=>{
        (async()=>{
            const Foot=await GetFoot();
            setFoot(Foot);
        })()
    },[])

    function GenImg(item:item, index: number) {
        return (
            <div key={index} className={style.spin2}>
                <img alt="Logo" src={item.img} loading="lazy" height="64" width="64" />
                </div>
        )
    }
    if(!FootList){return (<></>)}
    return (
        <div className="mt-4">
            <div className="relative overflow-hidden ">
                <div className="flex h-25">
                    <div className={style.spin}>
                        {FootList.map(GenImg)}
                    </div>
                    <div className={style.spin}>
                        {FootList.map(GenImg)}
                    </div>
                    <div className={style.spin}>
                        {FootList.map(GenImg)}
                    </div>
                </div>
                <div className={style.Blur} />
                <div className={style.Blur2} />
            </div>
        </div>
    )
}

export default SpinBrand
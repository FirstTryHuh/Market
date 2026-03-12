import style from "../css/footer.module.css"
import FootList from "./FootList"

const SpinBrand = () => {
    function GenImg(item: string, index: number) {
        return (
            <div key={index} className={style.spin2}><img alt="Logo" src={item} loading="lazy" height="64" width="64" /></div>
        )
    }
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
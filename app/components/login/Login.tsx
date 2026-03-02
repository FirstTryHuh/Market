'use client'
import style from "../css/log.module.css"
import Login from "../SmallComponent/login"
import Side from "../SmallComponent/side"
import Signup from "../SmallComponent/signup"
import { useSigned } from "../SmallComponent/signed";

export default function LoginElement():React.JSX.Element{
    const { signed, SetSigned } = useSigned();
    return(
        <div className={style.Body}>
            <div className={style.Gridd}>
                <div className={style.MainScreen}>
                    {signed?<Login SetSigned={SetSigned} />:<Signup SetSigned={SetSigned}/>}
                </div>
                <div className={style.SideScreen}>
                    <Side/>
                </div>
            </div>
        </div>
    )
}
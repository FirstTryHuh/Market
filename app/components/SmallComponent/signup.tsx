'use client'
import React, { Dispatch, SetStateAction, useState } from "react"
import Link from "next/link"
import style from "../css/log.module.css"
import { handleSignInGoogle, Register } from "../actions/auth"
import { useRouter } from "next/navigation"

interface props {
    SetSigned: Dispatch<SetStateAction<boolean>>,
}
export default function Signup(props: props): React.JSX.Element {
    const router = useRouter();
    const [result, setResult] = useState<[number, string] | null>(null);
    return (
        <>
            <div className={style.icon}>
                <Link href='/'>
                    <svg className={style.Svg} viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><text x="120" y="400" fontFamily="Arial, Helvetica, sans-serif" fontSize="350" fontWeight="700" fill="#000000">Crip</text><circle cx="900" cy="380" r="45" fill="#ff3b30" /></svg>
                </Link>
            </div>
            <div className={style.FormSection}>
                <div className={style.Form}>
                    <svg className={style.Svg} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f7b267" /><stop offset="100%" stopColor="#ff5e7e" /></linearGradient></defs><circle cx="256" cy="256" r="220" fill="none" stroke="url(#coinGradient)" strokeWidth="20" /><circle cx="256" cy="256" r="180" fill="none" stroke="url(#coinGradient)" strokeWidth="20" /><text x="256" y="380" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="360" fill="url(#coinGradient)">$</text></svg>
                    <div className={style.title}>Welcome to Crip</div>
                    <div className="text-center leading-5">Create your account and discover world-class model.</div>
                    <form action={handleSignInGoogle}>
                        <button type="submit" className={style.googleBtn}>Continue with Google</button>
                    </form>
                    <div className={style.divider}>or</div>
                    <form action={async (formData) => {
                        const res = await Register(formData);
                        setResult(res);
                        if (res[0] === 3) {
                            router.replace("/new");
                        }
                    }}>
                        <input className={style.input} type="text" name="username" placeholder="Username" />
                        <input className={style.input} type="password" name="password" placeholder="Password" />
                        {result && result[0] !== 3 && <p className={style.error}>{result[1]}</p>}
                        <button type="submit" className={style.submitBtn}>Continue</button>
                    </form>
                    <div className={style.terms}>By continuing, you agree to our Terms and Privacy Policy.</div>
                    <div className={style.terms}>Don&apos;t have an account? <div onClick={(() => { props.SetSigned(true); })} className={style.link}>Log in</div></div>
                </div>
            </div>
        </>
    )
}
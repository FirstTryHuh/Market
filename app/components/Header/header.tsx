'use client';
import style from "../css/header.module.css"
import Navigation from '../SmallComponent/Navigation';
import Link from 'next/link';

import FindingBar from '../SmallComponent/FindingBar';
import { usePathname } from 'next/navigation';
import { useSigned } from "../SmallComponent/signed";
import { useSession, signOut } from "next-auth/react";

const Head = () => {
    const { SetSigned } = useSigned();
    const { data: Session, status } = useSession();
    console.log(status);

    return (<header className={style.header}>
        <div className={style.middle}>
            <div className={style.OneLine}>
                <Link href='/'>
                    <svg width="64" height="64" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><text x="120" y="400" fontFamily="Arial, Helvetica, sans-serif" fontSize="350" fontWeight="700" fill="#000000">Crip</text><circle cx="900" cy="380" r="45" fill="#ff3b30" /></svg>
                </Link>
                <Navigation />
            </div>
            <FindingBar home={usePathname() === '/' ? true : false} />

            {status == 'loading' ? null : !Session
                ? <div className='flex gap-2'>
                    <Link onClick={() => SetSigned(true)} href="/new" className="z-2 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Log in</Link>
                    <Link onClick={() => SetSigned(false)} href="/new" className="z-2 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Link>
                </div>
                : <div className={style.user}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.9 107.5" className={style.icon} ><g><path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z" /></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" className={style.icon}> <path d="M14.9997 19C14.9997 20.6569 13.6566 22 11.9997 22C10.3429 22 8.99972 20.6569 8.99972 19M13.7962 6.23856C14.2317 5.78864 14.4997 5.17562 14.4997 4.5C14.4997 3.11929 13.3804 2 11.9997 2C10.619 2 9.49972 3.11929 9.49972 4.5C9.49972 5.17562 9.76772 5.78864 10.2032 6.23856M17.9997 11.2C17.9997 9.82087 17.3676 8.49823 16.2424 7.52304C15.1171 6.54786 13.591 6 11.9997 6C10.4084 6 8.8823 6.54786 7.75708 7.52304C6.63186 8.49823 5.99972 9.82087 5.99972 11.2C5.99972 13.4818 5.43385 15.1506 4.72778 16.3447C3.92306 17.7056 3.5207 18.3861 3.53659 18.5486C3.55476 18.7346 3.58824 18.7933 3.73906 18.9036C3.87089 19 4.53323 19 5.85791 19H18.1415C19.4662 19 20.1286 19 20.2604 18.9036C20.4112 18.7933 20.4447 18.7346 20.4629 18.5486C20.4787 18.3861 20.0764 17.7056 19.2717 16.3447C18.5656 15.1506 17.9997 13.4818 17.9997 11.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </svg>
                    <div className={style.hoverIt}>
                        <Link href="/user"><img className={style.userImg} src={Session.user?.image ? Session.user.image : "/user.png"} alt="Avatar" /></Link>
                        <button onClick={() => signOut({ callbackUrl: '/' })} className={style.popUp}>
                            <div>Sign out</div>
                        </button>
                    </div>
                </div>
            }
        </div>
    </header>
    )
}

export default Head;
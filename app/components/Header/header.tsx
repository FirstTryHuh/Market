'use client';
import style from "../css/header.module.css"
import Navigation from '../SmallComponent/Navigation';
import Link  from 'next/link';

import FindingBar from '../SmallComponent/FindingBar';
import { usePathname } from 'next/navigation';
import { useSigned } from "../SmallComponent/signed";

const Head = () => {
    const { SetSigned } = useSigned();

    return (<header>
        <div className={style.middle}>
            <div className={style.OneLine}>
                <Link  href='/'>
                    <svg width="64" height="64" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><text x="120" y="400" fontFamily="Arial, Helvetica, sans-serif" fontSize="350" fontWeight="700" fill="#000000">Crip</text><circle cx="900" cy="380" r="45" fill="#ff3b30"/></svg>
                </Link>
                <Navigation/>
            </div>
            <FindingBar home={usePathname()==='/'?true:false}/>
            <div className='flex gap-2'>
                <Link onClick={()=>SetSigned(true)} href="/new" className="z-2 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Log in</Link>
                <Link onClick={()=>SetSigned(false)} href="/new" className="z-2 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Link>
            </div>
        </div>
    </header>
    )
}

export default Head;
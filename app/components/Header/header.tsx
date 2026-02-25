'use client';
import style from "../css/header.module.css"
import Navigation from '../SmallComponent/Navigation';
import Link  from 'next/link';
import { Button } from '@/app/components/SmallComponent/button';
import FindingBar from '../SmallComponent/FindingBar';
import { usePathname } from 'next/navigation';

const Head = () => {

    return (<header>
        <div className={style.middle}>
            <div className={style.OneLine}>
                <Link  href='/'><img className={style.logo} src="/crip-high-resolution-logo.png" /></Link>
                <Navigation/>
            </div>
            <FindingBar home={usePathname()==='/'?true:false}/>
            <div className='flex gap-2'>
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700"><Link href="/login">Log in</Link></Button>
                <Button className="bg-orange-500 hover:bg-orange-600"><Link href="/signup">Sign Up</Link></Button>
            </div>
        </div>
    </header>
    )
}

export default Head;
'use client';
import style from "../css/footer.module.css"
import Link  from 'next/link';
import { Button } from '@/app/components/SmallComponent/button';
import Navigation from '../SmallComponent/Navigation';
import SocialSvg from '../SmallComponent/socialSvg';
import SpinBrand from '../SmallComponent/SpinBrand';

const Foot = () => {
  return (
    <footer className="bg-white">
        <div className='w-full flex justify-center pb-4'>
            <Button className="flex bg-gray-900 hover:bg-gray-600 text-gray-100 rounded-2xl"><Link href="/login">Sign in for more</Link></Button>
        </div>
        <SpinBrand/>
        <div className={style.middle}>
            <Link  href='/'><img className={style.logo} src="/crip-high-resolution-logo.png" /></Link>
            <Navigation/>
            <SocialSvg/>
        </div>
    </footer>
  )
}

export default Foot
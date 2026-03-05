'use client';
import style from "../css/footer.module.css"
import Link  from 'next/link';
import { Button } from '@/app/components/SmallComponent/button';
import Navigation from '../SmallComponent/Navigation';
import SocialSvg from '../SmallComponent/socialSvg';
import SpinBrand from '../SmallComponent/SpinBrand';
import { useSession } from "next-auth/react";

const Foot = () => {
  const date=new Date().getFullYear();
  const {data:Session}=useSession()
  return (
    <footer className="bg-white flex items-center justify-center">
      <div className={style.Footer}>
        {Session?<div className="h-8"></div>:<div className='w-full flex justify-center cursor-pointer'>
            <Link href="/login"><Button className="flex bg-gray-900 hover:bg-gray-500 text-gray-100 rounded-2xl cursor-pointer">Sign in for more</Button></Link>
        </div>}
        <SpinBrand/>
        <div className={style.middle}>
            <Link  href='/'><svg width="86" height="86" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><text x="120" y="400" fontFamily="Arial, Helvetica, sans-serif" fontSize="350" fontWeight="700" fill="#000000">Crip</text><circle cx="900" cy="380" r="45" fill="#ff3b30"/></svg></Link>
            <Navigation/>
            <SocialSvg/>
        </div>
        <div className={style.terms}>@{date} Crip</div>
      </div>
    </footer>
  )
}

export default Foot
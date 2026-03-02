'use client'
import { useState } from "react"
import style from "../css/Home.module.css"
import FindingBar from "../SmallComponent/FindingBar"
import Link from "next/link"
const HomePage = () => {
  const [mouse,SetMouse]=useState({
    targetX:0,
    targetY:0,
  })
  return (
    <div onMouseMove={((event)=>{SetMouse({
        targetX:event.clientX,
        targetY:event.clientY,
      })})}>
      <div style={{position:"fixed",
    inset: "0",
    zIndex: -1,
    backgroundImage: `radial-gradient(circle, orange 1px, transparent 1px)`,
    backgroundSize: `30px 30px`,
    maskImage: `radial-gradient(200px circle at ${mouse.targetX}px ${mouse.targetY}px, black, transparent)`,
    WebkitMaskImage: `radial-gradient(200px circle at ${mouse.targetX}px ${mouse.targetY}px, black, transparent)`,
}} />
      <div className={style.Table}>
        <div className={style.item}>
          <div style={{top:"0",padding:"1rem"}}>
            <div className={style.FlexSm}>
              <div className={style.Head}>Your next favorite thing is just a search away</div>
              <div style={{fontSize:"0.7rem"}}>Ready to buy? Or just browsing for inspiration? Either way, drop what you're looking for into the search bar and let's go.</div>
            </div>
            <FindingBar home={false}/>
            <form className="flex gap-1 mt-4" action="submit">
              <div style={{fontWeight:"700",paddingRight:"1rem"}}>Popular</div>
              <Link href={"/search/"+"shoes"}><button className={style.buttons}>shoes</button></Link>
              <Link href={"/search/"+"skateboard"}><button className={style.buttons}>skateboard</button></Link>
              <Link href={"/search/"+"computer"}><button className={style.buttons}>computer</button></Link>
              <Link href={"/search/"+"dress"}><button className={style.buttons}>dress</button></Link>
            </form>
          </div>
        </div>
        <div className={style.item2}>
          <img className={style.Back} src="/BackGroundImg.png" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
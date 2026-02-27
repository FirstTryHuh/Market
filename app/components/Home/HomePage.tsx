'use client'
import { useState } from "react"
import style from "../css/Home.module.css"
import FindingBar from "../SmallComponent/FindingBar"
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
              <button className={style.buttons}>shoes</button>
              <button className={style.buttons}>skateboard</button>
              <button className={style.buttons}>computer</button>
              <button className={style.buttons}>dress</button>
            </form>
          </div>
        </div>
        <div className={style.item}>
          <img style={{width:"100vw",height:"90vh",position:"relative", top:"-90px",left:"-30px"}} src="/ChatGPT Image Feb 24, 2026, 02_28_07 PM.png" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
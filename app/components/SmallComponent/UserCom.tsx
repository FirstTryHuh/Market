'use client'
import { useSession } from "next-auth/react"
import style from "../css/User.module.css"
import Copyright from "./Copyright"
import { useRouter } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { GetUser, HandleChanges } from "../actions/SomeChanges";


export default function UserCom(): React.JSX.Element {
    function GivePost(props: {
        name: string,
        like: number,
        seen: number,
        cost: number,
        quantity: number,
        img:string,

    }, index: number) {
        return (
            <div key={index} className={style.AddBox}>
                <div className={style.PostWindow}>
                    {props.img.length===0?<img className="col-span-full row-span-full opacity-30" width={"50%"}  src={props.img} alt="" />:null}
                    <div className={style.name}>{props.name}</div>
                    <div className={style.cost}>Price: {props.cost}</div>
                    <div className={style.quantity}>{props.quantity} left</div>
                    <div className={style.likeHold}>
                        <div className={style.like}>
                            <div className={style.likeNumber}>{props.like}</div>
                            <div className={style.likeImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16" role="img" aria-hidden="true">
                                    <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                        <div className={style.like}>
                            <div className={style.likeNumber}>{props.seen}</div>
                            <div className={style.likeImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true" >
                                    <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const { data: Session, status } = useSession();
    const [Editing, SetEdit] = useState(false);
    const[props,setProps]=useState<any>(null);
    const route = useRouter();
    const [isPending,startTransition]=useTransition()
    useEffect(()=>{
        if (Session?.user.id) {
            (async()=>{
                const data=await GetUser(Number(Session.user.id));
                setProps(data);
            })();
    }},[Session?.user.id])
    useEffect(()=>{
        if (status === "unauthenticated") { route.replace("/new") }
    },[status])
    useEffect(()=>{
        if (Editing===false) { route.refresh(); }
    },[Editing])
    return (
        <div className={style.Page}>
            <div className={style.Grid}>
                {/* Left sidebar */}
                <div className={style.Left}>
                    <div className={style.AvatarWrap}>
                        <img src={props?.img.length===0 ? "/user.png":props?.img.length} alt="avatar" />
                    </div>

                    <div className={style.Name}>
                        <div className={style.FullName}>{props?.name ?? "—"}</div>
                        <div className={style.Email}>{props?.email ?? ""}</div>
                    </div>

                    <div className={style.Description}>
                        {props?.Description?.length===0 ? "No description yet.":props?.Description}
                    </div>

                    <div className={style.Location}>
                        <span className={style.LocationIcon}>📍</span>
                        {props?.Location?.length===0 ? "Location not set":props?.Location}
                    </div>

                    <div className={style.Divider} />

                    {!Editing ? (
                        <button className={style.EditProfile} onClick={() => SetEdit(true)}>
                            Edit profile
                        </button>
                    ) : (
                        <form
                            className={style.EditForm}
                            onSubmit={async (e) => {
                                e.preventDefault();
                                await HandleChanges(new FormData(e.currentTarget), String(props?.id ?? -1));
                                SetEdit(false);
                                
                            }}
                        >
                            <label>Avatar</label>
                            <input className={style.AvatarInput} type="text" name="Avatar"  />

                            <label>Name</label>
                            <input className={style.EditInput} type="text" name="Name" placeholder="Your name" defaultValue={props?.name ?? ""} />

                            <label>Description</label>
                            <input className={style.EditInput} type="text" name="description" placeholder="About you..." defaultValue={props?.Description ?? ""} />

                            <label>Location</label>
                            <input className={style.EditInput} type="text" name="location" placeholder="City, Country" defaultValue={props?.Location ?? ""} />

                            <div className={style.FormActions}>
                                <button type="submit" className={style.SaveBtn}>Save</button>
                                <button type="button" className={style.CancelBtn} onClick={() => SetEdit(false)}>Cancel</button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Right content */}
                <div className={style.Right}>
                    <div>
                        <div className={style.SectionTitle}>Recent posts</div>
                        <div className={style.Posts}>
                            {props?.posts?.map(GivePost)}
                            <button className={style.AddBox}>+</button>
                        </div>
                    </div>
                </div>

                <div className={style.Footer}>
                    <Copyright />
                </div>
            </div>
        </div>
    )
}

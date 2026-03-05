'use client'
import { useSession } from "next-auth/react"
import style from "../css/User.module.css"
import Copyright from "./Copyright"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserCom(): React.JSX.Element {
    async function HandleChanges(formData: FormData) {
        return
    }
    const { data: Session } = useSession();
    const [Editing, SetEdit] = useState(false);
    const route = useRouter()
    if (!Session) { route.replace("/new") }

    return (
        <div className={style.Page}>
            <div className={style.Grid}>
                {/* Left sidebar */}
                <div className={style.Left}>
                    <div className={style.AvatarWrap}>
                        <img src={Session?.user?.image ?? "/user.png"} alt="avatar" />
                    </div>

                    <div className={style.Name}>
                        <div className={style.FullName}>{Session?.user?.name ?? "—"}</div>
                        <div className={style.Email}>{Session?.user?.email ?? ""}</div>
                    </div>

                    <div className={style.Description}>
                        {Session?.user?.description ?? "No description yet."}
                    </div>

                    <div className={style.Location}>
                        <span className={style.LocationIcon}>📍</span>
                        {Session?.user?.location ?? "Location not set"}
                    </div>

                    <div className={style.Divider} />

                    {!Editing ? (
                        <button className={style.EditProfile} onClick={() => SetEdit(true)}>
                            Edit profile
                        </button>
                    ) : (
                        <form
                            className={style.EditForm}
                            onSubmit={(e) => {
                                e.preventDefault();
                                SetEdit(false);
                                HandleChanges(new FormData(e.currentTarget));
                            }}
                        >
                            <label>Avatar</label>
                            <input className={style.AvatarInput} type="file" name="Avatar" accept="image/*" />

                            <label>Name</label>
                            <input className={style.EditInput} type="text" name="Name" placeholder="Your name" defaultValue={Session?.user?.name ?? ""} />

                            <label>Description</label>
                            <input className={style.EditInput} type="text" name="description" placeholder="About you..." defaultValue={Session?.user?.description ?? ""} />

                            <label>Location</label>
                            <input className={style.EditInput} type="text" name="location" placeholder="City, Country" defaultValue={Session?.user?.location ?? ""} />

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
                            <div className={style.Box}>Post 1</div>
                            <div className={style.Box}>Post 2</div>
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

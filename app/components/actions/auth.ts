'use server'
import { signIn,signOut } from "@/auth"
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt"

export async function handleSignOut() {
    await signOut({ redirectTo: '/' })
}

export async function handleSignInGoogle() {
    await signIn('google')
}
export async function handleSignInCredential(formData:FormData) {
    try{
        const res=await signIn('credentials',{
            email:formData.get('email'),
            password:formData.get('password'),
            redirect:false,
        })
        return res;
    }catch(error){
        throw new Error(error instanceof Error?error.message:String(error))
    }
    
}
export async function Register(formData:FormData):Promise<[number,string]>{
    const Saltround=10;

    const username= String(formData.get('username'));
    if(username.length<8){return [0,"username need to be atleast 8 digit long"]}
    const checkUser=await prisma.user.findMany({where:{Username:username}})
    if(checkUser.length!==0){return [1,"This username already exist. Try logging in!"]}
    const password= String(formData.get('password'));
    if(password.length<8){return [2,"password need to be atleast 8 digit long"]}

    const hash=await bcrypt.hash(password,Saltround) 
    const User=await prisma.user.create({data:{
        name:username,
        Username:username,
        Password:hash,
        Description:"",
        Location:"",}
    })
    return [3,"Account has been registed"]
}

export async function changeName({Name,Id}:{Name:string,Id:number}) {
    await prisma.user.update({where:{id:Id},data:{name:Name}})
}

import bcrypt from 'bcrypt';
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from 'next-auth/providers/credentials';
import { prisma } from "./lib/db";

export const {handlers,signIn,signOut,auth}=NextAuth({
    session:{strategy:"jwt"},
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization:{
            params:{scope:'openid email profile'}
        }
    }),
    Credentials({
        async authorize(credentials:Partial<Record<string, unknown>>):Promise<any> {
            if(credentials===null){return null;}
            try{
                const User=credentials?.email as string;
                const Pass=credentials?.password as string
                const data=await prisma.user.findFirst({where:{Username:User}})
                if(!data){
                    throw new Error("User not found!");
                }
                if(!Pass){
                    throw new Error("Enter Password please!");
                }
                if(!data.Password){
                    throw new Error("System error");
                }
                const isMatch=await bcrypt.compare(Pass,data.Password)
                if(isMatch){
                    return data;
                }else{
                    throw new Error("check your password!")
                }
            }catch(error){
                throw new Error(error instanceof Error ? error.message : String(error));
            }
        }
    })]
})

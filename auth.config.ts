import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const protectedRoutes = ["/user"];

export const authConfig: NextAuthConfig = {
    pages:{
        signIn:"/new",
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({}),
    ],
    callbacks: {
        authorized({ auth, request }) {
            const { pathname } = request.nextUrl;
            const isProtected = protectedRoutes.some(r => pathname.startsWith(r));
            if (!auth && isProtected) return false;
            return true;
        },
    },
};

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const publicRoutes = ["/new", "/api/auth"];

export const authConfig: NextAuthConfig = {
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
            const isPublic = publicRoutes.some(r => pathname.startsWith(r));
            if (!auth && !isPublic) return false;
            return true;
        },
    },
};

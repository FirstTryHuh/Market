import bcrypt from 'bcrypt';
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from 'next-auth/providers/credentials';
import { prisma } from "./lib/db";
import { generateAccessToken, generateRefreshToken, getRefreshExpiry } from "./lib/tokens";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60,
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: { scope: 'openid email profile' }
            }
        }),
        Credentials({
            async authorize(credentials: Partial<Record<string, unknown>>): Promise<any> {
                if (credentials === null) return null;
                try {
                    const User = credentials?.email as string;
                    const Pass = credentials?.password as string;
                    const data = await prisma.user.findFirst({ where: { Username: User } });
                    if (!data) throw new Error("User not found!");
                    if (!Pass) throw new Error("Enter Password please!");
                    if (!data.Password) throw new Error("System error");

                    const isMatch = await bcrypt.compare(Pass, data.Password);
                    if (!isMatch) throw new Error("Check your password!");

                    const accessToken = generateAccessToken(data.id, data.Username);
                    const refreshToken = generateRefreshToken();

                    await prisma.refreshToken.create({
                        data: {
                            token: refreshToken,
                            userId: data.id,
                            expiresAt: getRefreshExpiry(),
                        }
                    });

                    return { ...data, accessToken, refreshToken };
                } catch (error) {
                    throw new Error(error instanceof Error ? error.message : String(error));
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.username = (user as any).Username;
                token.accessToken = (user as any).accessToken;
                token.refreshToken = (user as any).refreshToken;
                token.description = (user as any).Description;
                token.location = (user as any).Location;
            }
            // For Google OAuth — store provider tokens
            if (account?.access_token) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.accessToken = token.accessToken as string;
            session.user.refreshToken = token.refreshToken as string;
            session.user.description = token.description as string;
            session.user.location = token.location as string;
            return session;
        }
    }
});

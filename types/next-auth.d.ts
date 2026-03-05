import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            description?: string;
            location?: string;
            posts?: string;
            accessToken?: string;
            refreshToken?: string;
        } & DefaultSession["user"];
    }
}

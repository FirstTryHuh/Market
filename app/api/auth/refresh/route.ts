import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateAccessToken, generateRefreshToken, getRefreshExpiry } from "@/lib/tokens";

export async function POST(req: NextRequest) {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
        return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const stored = await prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { User: true }
    });

    if (!stored || stored.expiresAt < new Date()) {
        return NextResponse.json({ error: "Invalid or expired refresh token" }, { status: 401 });
    }

    // Rotate — delete old token, create new one
    await prisma.refreshToken.delete({ where: { id: stored.id } });

    const newAccessToken = generateAccessToken(stored.userId, stored.User.Username);
    const newRefreshToken = generateRefreshToken();

    await prisma.refreshToken.create({
        data: {
            token: newRefreshToken,
            userId: stored.userId,
            expiresAt: getRefreshExpiry(),
        }
    });

    return NextResponse.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
}

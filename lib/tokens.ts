import jwt from "jsonwebtoken";
import crypto from "crypto";

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const ACCESS_EXPIRES = "15m";
const REFRESH_EXPIRES_MS = 7 * 24 * 60 * 60 * 1000;

export function generateAccessToken(userId: number, username: string) {
    return jwt.sign({ userId, username }, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES });
}

export function generateRefreshToken() {
    return crypto.randomBytes(64).toString("hex");
}

export function getRefreshExpiry() {
    return new Date(Date.now() + REFRESH_EXPIRES_MS);
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, ACCESS_SECRET) as { userId: number; username: string };
}

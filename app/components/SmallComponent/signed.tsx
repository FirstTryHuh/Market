'use client'
import { SessionProvider } from 'next-auth/react'           // ← add
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

const SignedContext = createContext<{
    signed: boolean;
    SetSigned: Dispatch<SetStateAction<boolean>>;
}>({ signed: true, SetSigned: () => {} })

export function SignedProvider({ children }: { children: React.ReactNode }) {
    const [signed, SetSigned] = useState(true)
    return (
        <SessionProvider>                                     {/* ← wrap here */}
            <SignedContext.Provider value={{ signed, SetSigned }}>
                {children}
            </SignedContext.Provider>
        </SessionProvider>
    )
}

export function useSigned() {
    return useContext(SignedContext)
}

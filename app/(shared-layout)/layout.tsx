import type { ReactNode } from "react";
import Foot from "../components/Foot/footer";
import Head from "../components/Header/header";

export default function SharedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (<>
    <Head/>
    {children}
    <Foot/>
  </>);
}
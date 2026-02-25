import Image from "next/image";
import Head from './components/Header/header'
import Foot from "./components/Foot/footer";
import HomePage from "./components/Home/HomePage";

export default function Home() {
  return (
    <div>
      <Head/>
      <HomePage/>
      <Foot/>
    </div>
  );
}

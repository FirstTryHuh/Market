export const dynamic = 'force-dynamic'
import Head from './components/Header/header'
import Foot from "./components/Foot/footer";
import HomePage from "./components/Home/HomePage";
import Product from "./components/Product/Product";

export default function Home() {
  return (
    <div>
      <Head/>
      <HomePage/>
      <Product Name=""/>
      <Foot/>
    </div>
  );
}

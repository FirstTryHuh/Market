import Head from "../../components/Header/header"
import Foot from "../../components/Foot/footer";
import Product from "../../components/Product/Product";
import { prisma } from "@/lib/db";
// From finding bar
export default async function UserPage({params}:{params:Promise<{Find:string}>}) {
    const data=await params;
    const Find=data.Find;
    return(
        <div>
            <Head/>
            <Product Name={Find}/>
            <Foot/>
        </div>
    )
} 


import Foot from "@/app/components/Foot/footer"
import Head from "@/app/components/Header/header"
import Detail from "@/app/components/SmallComponent/Detail"
// From Detail
export default async function page({params}:{params:Promise<{id:string}>}) {
  const result=await params;
  const num=Number(result.id);
  return (
  <div>
    <Head/>
    <Detail num={num}/>
    <Foot/>
  </div>
)
} 



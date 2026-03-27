import Product from "../../../components/Product/Product";


export default async function UserPage({params}:{params:Promise<{Find:string}>}) {
    const data=await params;
    const Find=data.Find;
    return(
        <div>
            <Product Name={Find}/>
        </div>
    )
} 


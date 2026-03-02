import React from "react";
import {Button} from "../components/SmallComponent/button";
import Head from "../components/Header/header"
import Foot from "../components/Foot/footer";
import Product from "../components/Product/Product";

const UserPage=async()=>{
    return(
        <div>
            <Head/>
            <Product Name={""}/>
            <Foot/>
        </div>
    )
}

export default UserPage;
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Product from "./Product";

const Products = () => {



    const [data, setData] = useState([]);





    const fetchData = async () => {


       try {

        const response = await axios.get("https://fakestoreapi.com/products");

        setData(response.data);

        
       } catch (error) {
        

         console.log(error.message);
         
       }

    }






    useEffect(() => {

        fetchData();
    }, [])

    return (
        <>
            <div className="flex flex-col  gap-4 m-4 justify-center items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="grid grid-cols-3 justify-between  gap-4 max-w-[1000px]"> 
                    {data.map((item) => (

                        <Product {...item} key={item.id} />
                    ))}
                </div>

            </div>
        </>

    )

}


export default Products;
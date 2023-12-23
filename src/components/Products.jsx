import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Product from "./Product";

const Products = () => {



    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);





    const fetchData = async () => {


        try {

            const response = await axios.get("https://fakestoreapi.com/products");

            setData(response.data);
            setLoading(false);


        } catch (error) {


            console.log(error.message);

        }

    }






    useEffect(() => {

        fetchData();

    }, [])



    if (loading) {
        return (
            <>
                <div className="flex justify-center items-center h-screen w-full">
                    
                    <button className="flex flex-col justify-center items-center gap-2">
                        <span className="w-5 h-5 animate-spin  rounded-[50%] border-4 border-white border-t-[#A2A2A2]"></span>
                        <span>Loading...</span>
                    </button>

                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col  gap-4 m-4 justify-center items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 justify-between  gap-4 max-w-[1000px]">
                    {data.map((item) => (

                        <Product {...item} key={item.id} />
                    ))}
                </div>

            </div>
        </>

    )

}


export default Products;
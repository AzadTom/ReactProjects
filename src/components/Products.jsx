import { useEffect ,useState} from "react";   // import useEffect & useState because i am gonna use it 
import axios from 'axios';           // import axios for data fetching using api it is like fetch but better
import Product from "./Product";       // create a differnt product component  and import here to use it


// this is products component which will use to render all product item we got it from api
const Products = () => { 


 // const [state,setState] = useState(initialstate) 

    const [data, setData] = useState([]);      //  in this state is data and to change the state we have setData  and we put empty array initially in usestate
   

    const [loading, setLoading] = useState(true);   // this is loading state 





    const fetchData = async () => {    // this async function we use for data fetching...

            // i am using here try catch block because it make your code more relevant and error free by the way it is good practice.
        try {

            // here i am using axios which i import above for data fetching
            // here i am hitting get request  with url (baseUrl+endPoint) now  it wait until we got data or respone.
            const response = await axios.get("https://fakestoreapi.com/products");

            // when we got response then we set response to setState which eventually update and data state got it!
            setData(response.data);

            // we got data so i updating  loading state using setLoading 
            setLoading(false);


        } catch (error) {

            // when "try" is not able to run means there is chance of error so it enter in catch block got it!
            console.log(error.message);

        }

    }





    //  useEffect , i am using  to call "fetchData()"
    // useEffect takes a callback and dependency array
    //  if we dont pass any  dependency array then useeffect will call  inside callback everytime.
    // if it is we pass empty dependency array then it will run only once!
    // here it will run once!
    // when page loads then useeffect runs .
    useEffect(() => {

        fetchData();

    }, [])



    // loading is true then only show loading ... otherwise not show anything . 
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


    // which html we write in react is not html it is jsx and got it.. which is combo of html and javascript...


    return (
        <>
           
            <div className="flex flex-col  gap-4 m-4 justify-center items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 justify-between  gap-4 max-w-[1000px]">
                    {/*  to embed dynamic data in jsx we use curly braces you can see below! 
                          i  update data  state when response comes from api then update  state using setData got it! above it "fetchData() above"
                     */}
                     {/* here i am iterating those response  and render and product  */}
                    {data.map((item) => ( <Product {...item} key={item.id} />))}
                    {/* key it helps react to identify react component uniquely! and passing props using {...item}  got it! */}
                </div>

            </div>
        </>

    )

}


export default Products;
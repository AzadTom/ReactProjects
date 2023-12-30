import axios from "axios";
import { useState } from "react";

const Login =()=>{


    const[userDetail,setUserDetail] = useState({
        username:"",
        password:""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
       
        setUserDetail({
          ...userDetail,
          [name]: value,
        });
      };


    const submitdata = async(e)=>{


        try {

            const response = await  axios.post("https://fakestoreapi.com/auth/login",{
                 username : "mor_2314",
                password: "83r5^_"
            });


            if(response.data)
            {
                console.log(response.data);
            }

            alert(response);
            
        }catch (error) {
            
            alert(error);
        }
    }

    return(
        <>
       <section className="bg-white w-full h-screen flex justify-center items-center">  

       <div className="bg-green-600 px-4 py-2 flex flex-col gap-2 justify-center items-center ">
                <h1>Login</h1>
            <div>
                 <h2>Username</h2>
                <input type="text"  placeholder="username" className="px-4 py-2 text-black" value={userDetail.username} onChange={handleInputChange} required name="username"/>
            </div>
            <div>
                <h2>Password</h2>
                <input type="password" placeholder="password" className="px-4 py-2 text-black" value={userDetail.password} onChange={handleInputChange} required name="password"/>
            </div>

            <button className="bg-blue-600 px-4 py-2" onClick={(e)=> submitdata(e)}>LogIn</button>

        </div>
       </section>
        </>
    )


}


export default Login;
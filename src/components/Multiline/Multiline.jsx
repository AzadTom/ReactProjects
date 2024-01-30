import React, { useEffect, useRef, useState } from 'react'

function Multiline() {


    const[searchTerm,setSearchTerm] = useState("");
    const [suggesstion,setSuggestion] = useState([]);

    

    const [selectedUser,setSelectedUser] = useState([]);

    const [selectedUserSet,setSelectedUserSet] = useState(new Set());

    const [activeState,setActiveState] = useState(0);


    const img  = "https://images.unsplash.com/photo-1672580661693-b9728a86ed35?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"


    const inputRef = useRef(null);
    const listRef = useRef(null);

    // 'https://dummyjson.com/users/search?q=John'

    const fetchUser  = ()=>{

        if(searchTerm.trim()==="")
        {
            setSuggestion([]);
            return;
        }

        fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res)=>(res.json())).then((data)=> setSuggestion(data))
        .catch((err)=> console.error(err));


        


        


        


    }

    const selectUser = (user)=>{


         if(!selectedUserSet.has(user.email))
         {
            setSelectedUser([...selectedUser,user]);
         }

        setSelectedUserSet(new Set([...selectedUserSet,user.email]));

        setSearchTerm("");
        setSuggestion([]);
        setActiveState(0);

        inputRef.current.focus();

        console.log(selectedUser);
        console.log(selectedUserSet);

    }



    const removeUser = (user)=>{


        const updatedList  = selectedUser.filter((item)=>{

            if(item.email !== user.email)
            {
                return item;
            }
        })

        setSelectedUser(updatedList);

        const updatedemails  = new Set(selectedUserSet);

        updatedemails.delete(user.email);

        setSelectedUserSet(updatedemails);


    }

  

    const handleKeyDown = (e)=>{


      

        if(e.key === "Backspace" && e.target.value ==="" && selectedUser.length>0)
        {
            const lastuser  =  selectedUser[selectedUser.length-1];

            removeUser(lastuser);
            
        }
        else if(e.key ==="ArrowDown" && suggesstion?.users?.length >0)
        { 

              e.preventDefault();
              setActiveState((prev)=> prev < suggesstion?.users?.length-1 ? prev+1:prev);
             
             



        }
        else if(e.key ==="ArrowUp" && suggesstion?.users?.length>0)
        {

            e.preventDefault();
            setActiveState((prev)=> prev > 0? prev-1:prev)
          
           
        }
        else if( e.key ="Enter" && activeState >= 0 && activeState < suggesstion?.users?.length-1)
        {

            const user  = suggesstion?.users[activeState];

            selectUser(user);

        }

    }



    useEffect(()=>{
        fetchUser()
    },[searchTerm])


  return (
    
    <div className='m-2'>

        
    
            <div className='w-full  flex items-center flex-wrap border border-black gap-2 p-5' >


               {/* pills */}
               {selectedUser.map((user)=>{

                 return(<Pills key={user.email} img={user.image} text={user.firstName} onClick={()=> removeUser(user)}/>)
               })}
               {/* input */}
               <div className='relative'>
               <input type="text" 
                ref={inputRef}
                value={searchTerm} 
                className='outline-none'
                onKeyDown={handleKeyDown}
                onChange={(e)=>(setSearchTerm(e.target.value))}
                 placeholder='Search For a User...'/>

                  {/* search suggesstion */}
                    <ul className='absolute top-12 max-h-[300px]  w-full overflow-scroll flex flex-col gap-2' ref={listRef}>
                    {suggesstion?.users?.map((user,index)=>{
                        return  !selectedUserSet.has(user.email) ? (
                            <li key={user.email} className={activeState === index ? "bg-black text-white flex gap-2 px-4 py-2" :"flex gap-2 items-center px-4 py-2  border border-black hover:bg-slate-950 hover:text-white" }  onClick={()=> selectUser(user)}>
                            <img src={user.image} alt={user.firstName}  width={25}/>
                            <span>{user.firstName}</span>
                        </li>
                        ):(<></>)
                       
                   })}  
                 </ul>
               </div>
               
            </div>
            
         
        
    </div>
  )
}

export default Multiline

const Pills  = ({text,img,onClick})=>{



    return(
        <>
        <div onClick={onClick} className='bg-black p-2 text-white  flex gap-2 items-center'>
            <img src={img} alt={text}  width={25}/>
            <span>{text}</span>
        </div>
        </>
    )

}
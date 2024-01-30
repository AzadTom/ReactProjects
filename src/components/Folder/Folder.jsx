import React, { useState } from 'react'

function Folder({explorer}) {


    const[expand,setExpand] = useState(false);
    const[showInput,setShowInput] = useState({
        visible:false,
        isFolder:null,

    });



            const folderDesign  = {

                marginTop:"6px",
                backgroundColor: "rgb(233,233,233)",
                display:"flex",
                justifyContent:"space-between",
                padding:"3px",
                width:"300px",
                cursor:"pointer"

            }


            const fileDesign = {

                marginTop:"6px",
                paddingLeft:"5px",
                display:"flex",
                flexDirection:"column"

            }


            const handleFolder = (e,isFolder) =>{


                    e.stopPropagation();
                    setExpand(true);
                    setShowInput({
                        visible:true,
                        isFolder
                    })
                    

            }




     if(explorer.isFolder){
        return (
            <div style={ {"margin":"5px"} }>
                <div style={folderDesign} onClick={()=> setExpand((prev)=> !prev)}>
                    <span>📂{explorer.name}</span>
                    <div style={{display:"flex", gap:"1.2rem"}}>
                    <button style={{ border:"1px solid black ", padding:"0 12px"}} onClick={(e)=> handleFolder(e,true)}>Folder +</button>
                    <button style={{ border:"1px solid black ", padding:"0 12px"}} onClick={(e)=> handleFolder(e,false)}>File +</button>
                </div>
                </div>

               
        
                <div style={{display: expand?"block":"none" , paddingLeft: "24px"}}>
                    {
                        showInput.visible && (
                            <div>
                                <span>{showInput.isFolder? "📂":"📄"}</span>
                                <input 
                                type="text"
                                onBlur={()=> setShowInput((prev)=>( {...prev,visible:false}))}
                                 autoFocus
                                 />
                            </div>
                        )

                    }
                    {
                        explorer.items.map((exp)=>{
        
                            return(<Folder explorer={exp}/>)
                        })
        
                    }
                </div>
            </div>
          )
     }else{

            return ( <span style={fileDesign}>📄 {explorer.name}</span> )

     }
  
}

export default Folder
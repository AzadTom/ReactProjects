import React, { useState } from 'react'

function FolderSt() {

    const [open,setOpen] = useState(false);

    const design2 ={
        "display":"flex",
        "flexDirection":"column",
    }

    const folderDesign = {

         "padding":"0.6rem 1rem",
         "color":"black"


    }

  return (
    <div>
        <h2  style={folderDesign} onClick={()=> setOpen((prev)=> !prev)} className='text-black hover:text-white hover:bg-slate-900  '>📁 componet   <span className='hidden hover:block'>📁folder</span> <span className='hidden hover:block'>📁file</span> </h2>
        {
             open &&(
                <div style={design2}>
                        <span>📝main.js</span>
                        <span>📝index.js</span>
                        <span>📝callback.js</span>
                        <span>📝memo.js</span>
                </div>
            )
        }
    </div>
  )
}

export default FolderSt
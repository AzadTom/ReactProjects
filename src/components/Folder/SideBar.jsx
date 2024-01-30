import React, { useState } from 'react';
import explorer  from '../../data/folderData.js';
import Folder from './Folder.jsx';

function SideBar() {


    const[exploreData,setExploreData] = useState(explorer);


    console.log(exploreData);



  return (
    <div>
        <Folder explorer={exploreData}/>
    </div>

  )
}

export default SideBar
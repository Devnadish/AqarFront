import React from 'react'
import headerCpm from "./headerCpm";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
function CardHeader({setMenu,title,type}) {
  return (
    <headerCpm.headerWarper>
        {/* <headerCpm.iconWarper onClick={()=>{setMenu(true)}} >
          <HiOutlineMenuAlt2 />
        </headerCpm.iconWarper> */}

        <headerCpm.headerTitleWarper>
         {title}
        </headerCpm.headerTitleWarper>
        
        <headerCpm.headerTypeWarper type={type}>{type}</headerCpm.headerTypeWarper>
      </headerCpm.headerWarper>
  )
}
export default CardHeader
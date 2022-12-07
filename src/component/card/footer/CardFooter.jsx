import React from 'react'
import cpm from "./cpm";

import { AiOutlineEye } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
 

function CardFooter({commentCounter, create, seeCounter,id}) {
  return (
    <cpm.actionWarper>
        <cpm.IdLink to={`/offer/${id}`}>
      <cpm.footeIconWithTextWarper>
      <cpm.MoreBtn>
        تفاصيل اكثر
      </cpm.MoreBtn>
      
    </cpm.footeIconWithTextWarper>
      </cpm.IdLink>
    {/* -------------------------------------------- */}
    <cpm.footeIconWithTextWarper>
      <cpm.footeIconWarper>
        <AiOutlineEye />
      </cpm.footeIconWarper>
      <cpm.footeIconTextWarper>{seeCounter}</cpm.footeIconTextWarper>
    </cpm.footeIconWithTextWarper>
    {/* -------------------------------------------- */}
    <cpm.footeIconWithTextWarper>
      <cpm.footeIconWarper>
        <FaRegComment />
      </cpm.footeIconWarper>
      <cpm.footeIconTextWarper>{commentCounter}</cpm.footeIconTextWarper>
    </cpm.footeIconWithTextWarper>
    {/* -------------------------------------------- */}
    <cpm.footeIconWithTextWarper>
      <cpm.footeIconWarper>
        <MdDateRange />
      </cpm.footeIconWarper>
      <cpm.footeIconTextWarper>{create}</cpm.footeIconTextWarper>
    </cpm.footeIconWithTextWarper>

    
    


    {/* -------------------------------------------- */}
    {/* <cpm.footeIconWithTextWarper>
      <cpm.footeIconWarper>
        <BsImage />
      </cpm.footeIconWarper>
      <cpm.footeIconTextWarper>10</cpm.footeIconTextWarper>
    </cpm.footeIconWithTextWarper> */}
    {/* -------------------------------------------- */}
    {/* <cpm.footeIconWithTextWarper>
      <cpm.footeIconWarper>
        <FiVideo />
      </cpm.footeIconWarper>
      <cpm.footeIconTextWarper>15</cpm.footeIconTextWarper>
    </cpm.footeIconWithTextWarper> */}
  </cpm.actionWarper>
  )
}

export default CardFooter
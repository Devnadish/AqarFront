import React,{useState} from 'react'
import cpm from "./idpagecpm";
import  GoogleLocation from "../../component/googleMap/GoogleMap" 
const GenralInfo = ({  mydata }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <cpm.ContentWarper>
          {/* ------------------------------------------------ */}
          <cpm.FieldSet>
          <cpm.TXTtitleWraper dirx="column">
            <cpm.TXTtitle>رقم العرض</cpm.TXTtitle>
            <cpm.TXTdata> {mydata.id} </cpm.TXTdata>
          </cpm.TXTtitleWraper>
         
          {/* ------------------------------------------------ */}
          <cpm.TXTtitleWraper dirx="column">
            <cpm.TXTtitle>تاريخ النشر</cpm.TXTtitle>
            <cpm.TXTdata> {mydata.crDate} </cpm.TXTdata>
          </cpm.TXTtitleWraper>
          {/* ------------------------------------------------ */}
          <cpm.TXTtitleWraper dirx="column">
            <cpm.TXTtitle>نوع العرض</cpm.TXTtitle>
            <cpm.TXTdata> {mydata.stutes} </cpm.TXTdata>
          </cpm.TXTtitleWraper>
          </cpm.FieldSet>
  
  
  
           {/* ------------------------------------------------ */}
           <cpm.TXTtitleWraper>
            <cpm.TXTdata> {mydata.title} </cpm.TXTdata>
          </cpm.TXTtitleWraper>
          {/* ------------------------------------------------ */}
          <cpm.TXTtitleWraper>
            <cpm.TXTdata align="right"> {mydata.detail} </cpm.TXTdata>
          </cpm.TXTtitleWraper>
          {/* ------------------------------------------------ */}
          <cpm.TXTtitleWraper border="none" onClick={()=>{setOpen(true)}}>
            <cpm.TXTBtn>خريطة جوجل</cpm.TXTBtn>
          </cpm.TXTtitleWraper>
          {/* ------------------------------------------------ */}
        </cpm.ContentWarper>
        {open && <GoogleLocation open={open} setOpen={setOpen} lat={"150"} lng={2500} image="/img/map1.jpg"/>}
      </>
    );
  };
  export default GenralInfo
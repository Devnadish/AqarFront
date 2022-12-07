import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DiloagShow from "../dailog/DiloagShow";
import { toast } from "react-toastify";
const Btn = styled.button`
  outline: none;
  padding: 0.5rem;
  min-width: 5rem;
  font-family: "Cairo";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  font-family: "CairoBold";

`;

const copyBtn1 = styled.button`
  outline: none;
  padding: 0.5rem;
  min-width: 5rem;
  font-family: 'Cairo', sans-serif;
  border-radius: 18px;
  border: none;
  /* background-color: ${({ iscopy }) => iscopy  ? "gold":"lightgreen"} ; */
  background-color: gold;
  color: ${({ theme }) => theme.text};
`;


const Txt = styled.p`
  outline: none;
  padding: 0.2rem 1rem;
font-size:1rem;
  min-width: 5rem;
  font-family: "Cairo";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.textSoft};
  color: ${({ theme }) => theme.text};
  font-family: "CairoBold";
  
  @media (max-width: 500px) {
    font-size:.85rem;
   
  }

`;

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  background-color: #000;
`;

const ActionWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const ImageActionWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  height: 100%;
  /* background-color: green; */
  padding: 0.5rem;
`;

function Servicedaialog({open,setOpen,lat,lng,image="/img/map1.jpg"}) {
  return (
    <>
      <div>GoogleMap</div>
      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          title={"معرض الصور"}
          children={<MapImage lat={lat} lng={lng} image={image}/>}
        />
      )}
    </>
  );
}

export default Servicedaialog;

const MapImage = ({lat,lng,image}) => {
  const [iscopy,setIscopy]=useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText(`${lat},${lng}`);
    setIscopy(!iscopy)
    toast.success("تم حفظ الاحداثيات انسخها لجوجل ماب  لتصل الينا بالسلامة");
  }



  return (
    <>
      <ImageActionWraper>
         
        <ImageWraper>
          <Image  src={image} alt={"test"} loadin="lazy" />
        </ImageWraper>
      </ImageActionWraper>
    </>
  );
};

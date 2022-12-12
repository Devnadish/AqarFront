import React, { useState } from "react";
import glb from "../../component/globalCpm";
import { AiOutlineCloudUpload } from "react-icons/ai";
import DiloagShow from "../dailog/DiloagShow";
import {  toast } from 'react-toastify';



function ImageUploadBtn({ refid,  logoPreview,btnTitle }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    refid.current.click();
  };

  const handlshow = () => {
    if (logoPreview===null){
        toast.info("الرجاء اختيار الصورة قبل طلب عرضها ...")
    }else{
        setOpen(true)
    }
  };
  
  return (
    <>
      <glb.ImagePreviewContainer>
        <glb.ImageBtn type="button" onClick={handleClick}>
          <AiOutlineCloudUpload />
          <glb.TXTLabel>{btnTitle}</glb.TXTLabel>
        </glb.ImageBtn>

        <glb.ImagePreview imgpreview={logoPreview} onClick={handlshow}>
          <glb.Image src={logoPreview} />
        </glb.ImagePreview>
      </glb.ImagePreviewContainer>


      
      {open   ? (
        <DiloagShow open={open} toggle={setOpen}>
          <glb.Image src={logoPreview} />
        </DiloagShow>
      ) : null}
    </>
  );
}

export default ImageUploadBtn;

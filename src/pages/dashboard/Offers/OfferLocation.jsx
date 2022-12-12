import React, { useState } from "react";
import { FileInput } from "../../../component/Input/Input";
import ImageUploadBtn from "../../../component/imageUploadBtn/ImageUploadBtn";
import InnerBoxCom from "./InnerBoxCom";
 
import MultiImageUploader from "./MultiImageUploader";



export const OfferLocation = ({ locationRef, setlocationImage, locationImage }) => {
 
  return (
    
    <>


<InnerBoxCom>
        <MultiImageUploader files={locationImage} setFiles={setlocationImage}
          maxUpload={1}
          isMulti={false} title="خريطة الموقع"/>
      </InnerBoxCom>


    </>
  );
};

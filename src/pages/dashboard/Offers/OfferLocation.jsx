import React, { useState } from "react";
import { FileInput } from "../../../component/Input/Input";
import ImageUploadBtn from "../../../component/imageUploadBtn/ImageUploadBtn";
import InnerBoxCom from "./InnerBoxCom";
 
import MultiImageUploader from "./MultiImageUploader";



export const OfferLocation = ({ locationRef, setlocationImage, locationImage }) => {
  // const [logoPreview, setLogoPreview] = useState(null);

  // const handleimage = (event) => {
  //   setLocation((pre) => event.target.files[0]);
  //   setLogoPreview(URL.createObjectURL(event.target.files[0]));
  //   console.log(logoPreview);
  // };

  return (
    
    <>


<InnerBoxCom>
        <MultiImageUploader files={locationImage} setFiles={setlocationImage}
          maxUpload={1}
          isMulti={false} />
      </InnerBoxCom>


      {/* <InnerBoxCom
        sx={{
          border: "1px solid",
          padding: "1rem",
          display: "flex",
          gap: 2,
          flex: 1,
          flexDirection: "column",
          minWidth: "300px",
          width: "100%",
        }}
      >
        <FileInput
          Xlabel={"خريطة الموقع"}
          Xplaceholder={"Xlabel"}
          Xrefrence={locationRef}
          Xtype="file"
          xhidden={true}
          xfileChange={handleimage}
        />
        <ImageUploadBtn
          refid={locationRef}
          imageLogo={locaion}
          logoPreview={logoPreview}
          btnTitle={"خريطة الموقع"}
        />
      </InnerBoxCom> */}
    </>
  );
};

import React from "react";
import Box from "@mui/material/Box";
import { Input } from "../../../component/Input/Input";
import ImageUploadBtn from "../../../component/imageUploadBtn/ImageUploadBtn"
import InnerBoxCom from "./InnerBoxCom"
import MultiImageUploader from "./MultiImageUploader";
export const OfferCoverImage = ({coverImage, setCoverImage}) => {
  return (
    <>
      

<InnerBoxCom>
        <MultiImageUploader files={coverImage} setFiles={setCoverImage}
          maxUpload={1}
          isMulti={false} />
      </InnerBoxCom>

    </>
  );
};
 
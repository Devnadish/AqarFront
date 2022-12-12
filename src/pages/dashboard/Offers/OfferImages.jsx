import React from "react";
import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./MultiImageUploader";
export const OfferImages = ({
  imageToUpload,
  setImageToUpload,
}) => {
  return (
    <>
      <InnerBoxCom>
        <MultiImageUploader files={imageToUpload} setFiles={setImageToUpload}
        maxUpload={10}
        isMulti={true} title="صورة العرض" noteTitle="10 صور حد اقصى"/>
      </InnerBoxCom>
    </>
  );
};

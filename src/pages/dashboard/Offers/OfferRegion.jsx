import React from "react";
import SelectCopm from "../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom"
export const OfferRegion = ({ offerTypeData ,regon, city,  dist}) => {
  return (
    <>
      <InnerBoxCom flexDir="row">
        <SelectCopm data={offerTypeData} Xlabel={"المنظقة"} dirLabel={"column"} Xrefrence={regon} />
        <SelectCopm data={offerTypeData} Xlabel={"المدينة"} dirLabel={"column"} Xrefrence={city} />
        <SelectCopm data={offerTypeData} Xlabel={"الحي"} dirLabel={"column"} Xrefrence={dist} />
      </InnerBoxCom>
    </>
  );
};

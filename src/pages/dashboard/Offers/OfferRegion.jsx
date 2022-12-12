import React from "react";
import SelectCopm from "../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom"
export const OfferRegion = ({ reigonData, cityData,  distData,regon, city,  dist}) => {
  return (
    <>
      <InnerBoxCom flexDir="row">
        <SelectCopm data={reigonData} Xlabel={"المنظقة"}  Xrefrence={regon} />
        <SelectCopm data={cityData} Xlabel={"المدينة"}   Xrefrence={city} />
        <SelectCopm data={distData} Xlabel={"الحي"}   Xrefrence={dist} />
      </InnerBoxCom>
    </>
  );
};

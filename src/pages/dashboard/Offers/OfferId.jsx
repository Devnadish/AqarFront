import React from "react";
import { Input } from "../../../component/Input/Input";
import SelectCopm from "../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom";

export const OfferId = ({ offerTypeData, offerId, offerDate, offerType }) => {
  return (
    <>
      <InnerBoxCom flexDir="row">
        <Input
          Xlabel={"رقم العرض"}
          Xplaceholder={"Xlabel"}
          // disable={true}
          Xrefrence={offerId}
        />
        <Input
          Xlabel={"تاريخ العرض"}
          Xplaceholder={"Xlabel"}
          Xtype="date"
          Xrefrence={offerDate}
        />
        <SelectCopm
          data={offerTypeData}
          Xlabel={"طبيعة العرض"}
          Xrefrence={offerType}
        />
      </InnerBoxCom>
    </>
  );
};

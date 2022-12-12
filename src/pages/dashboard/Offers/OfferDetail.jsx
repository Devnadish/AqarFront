import React from "react";
import Box from "@mui/material/Box";
import { Input, InputText } from "../../../component/Input/Input";
import InnerBoxCom from "./InnerBoxCom"
export const OfferDetail = ({title,  detail}) => {
  return (
    <>
      <InnerBoxCom>
        <Input Xlabel={"عنوان الاعلان"} Xplaceholder={"Xlabel"} Xrefrence={title} />
        <InputText
          Xlabel={"تفاصيل الاعلان"}
          Xplaceholder={"Xlabel"}
          Xrows={5}
          Xrefrence={detail}
        />
      </InnerBoxCom>
    </>
  );
};

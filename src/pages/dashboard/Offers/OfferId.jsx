import React,{useEffect} from "react";
import { Input } from "../../../component/Input/Input";
import SelectCopm from "../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import { format } from 'date-fns'
export const OfferId = ({ offerTypeData, offerId, offerDate, offerType }) => {
  let  mydate=format(new Date(), 'dd/mm/yyyy')
  console.log(mydate)


  useEffect(() => {
     
     offerDate.current.focus()
     
  
    
  }, [])
  
  

  return (
    <>
      <InnerBoxCom flexDir="row">
        <Input
          Xlabel={"رقم العرض"}
          Xplaceholder={"Xlabel"}
          disable={true}
          Xrefrence={offerId}
        />
        <Input
          Xlabel={"تاريخ العرض"}
          Xtype="date"
          Xrefrence={offerDate}
          // xvalue={"2022-01-31"}
          XdefalutValue={mydate}

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

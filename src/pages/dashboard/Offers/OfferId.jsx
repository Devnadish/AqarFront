import React,{useEffect} from "react";
import { Input } from "../../../component/Input/Input";
import SelectCopm from "../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import { format } from 'date-fns'
import { Typography ,Box} from "@mui/material";


export const OfferId = ({ offerTypeData, offerId, offerDate, offerType,masterOfferNO ,setofferTypeId,
  offerTypeId}) => {
  let  mydate=format(new Date(), 'dd/mm/yyyy')
  // console.log(mydate)


  useEffect(() => {
     
     offerDate.current.focus()
     
  
    
  }, [])
  
  

  return (
    <>
      <InnerBoxCom flexDir="row">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            border: ".5px solid rgba(0,0,0,0.2)",
            borderRadius: 2,
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
        
            sx={{ 
            display: "block",
            width: "100%", 
            backgroundColor:"primary.light",
            color: "white",
            fontFamily:"TajawalBold",
            fontSize:"1rem",
            textAlign: "center",
            verticalAlign: "middle",
            margin:0,
            py:.5
            // height:"100%",
            
          }}
          >
            رقم العرض
          </Typography>
          <Typography sx={{
            
            width: "100%", 
            fontFamily:"TajawalBold",
            fontSize:"1.3rem",
            textAlign: "center",
            margin:0,
            }}
            >{masterOfferNO}</Typography>
        </Box>
        {/* <Input
          Xlabel={"رقم العرض"}
          Xplaceholder={masterOfferNO}
          disable={true}
          Xrefrence={offerId}
        /> */}
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
          setSelectId={setofferTypeId}
          SelectId={offerTypeId}
        />
      </InnerBoxCom>
    </>
  );
};

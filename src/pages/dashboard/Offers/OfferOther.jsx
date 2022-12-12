import React from "react";
import { Input } from "../../../component/Input/Input";
// import CheckBox from "../../../component/checkBox/CheckBox";
import {
  Checkbox,
  FormControlLabel,
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Typography,
} from "@mui/material";
import InnerBoxCom from "./InnerBoxCom";

export const OfferOther = ({
  price,
  isShowPrice,
  isComment,
  isOwner,
  setIsShowPrice,
  setIsComment,
  setIsOwner,
}) => {
  console.log(
    "price :" + isShowPrice,
    "isComment :" + isComment,
    "isOwner :" + isOwner
  );
  return (
    <>
      <InnerBoxCom flexDir="row">
        <Box>
          <Input Xlabel={"السعر"} Xplaceholder={"0"} Xrefrence={price} />
        </Box>
        <FormControl variant="filled" error sx={{ width: "100%" }}>
          <FormLabel
            sx={{
              fontFamily: "CairoBold",
              fontSize: { xs: ".8rem", sm: "1rem" },
            }}
          >
            خصائص العرض
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CairoBold",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  عرض السعر
                </Typography>
              }
              control={
                <Checkbox
                color="secondary"
                size="medium"
                
                  checked={isShowPrice}
                  onChange={(e) => setIsShowPrice((pre) => e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CairoBold",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  مسموح التعليق
                </Typography>
              }
              control={
                <Checkbox
                color="secondary"
                size="medium"
                
                
                  checked={isComment}
                  onChange={(e) => setIsComment((pre) => e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CairoBold",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  المالك المباشر
                </Typography>
              }
              control={
                <Checkbox
                color="secondary"
                size="medium"
                  checked={isOwner}
                  onChange={(e) => setIsOwner((pre) => e.target.checked)}
                />
              }
            />
          </FormGroup>
          {/* <FormHelperText >error</FormHelperText> */}
        </FormControl>
      </InnerBoxCom>
    </>
  );
};

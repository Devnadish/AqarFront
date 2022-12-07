import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function DiloagShow({
  open,
  toggle,
  children,
  title,
  titleColor = "primary.dark",
  bodyColor = "background.paper",
}) {
  return (
    <>
      <Dialog   sx={{width:"100%"}}  open={open} onClose={toggle}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 0,
            px: 2,
            py: 1,
            height:"30px",
            bgcolor: titleColor,
            // borderTop: "3px solid #ccc",
            
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily:"CairoBold",
              color: "background.paper",
              fontSize:"1rem"
            }}
            px={2}
          >
            {title}
          </Typography>

          <Button
            onClick={() => toggle(false)}
            sx={{
              minWidth: 0,
              py: 0.3,
              m: 0,
              width: "15px",
              height: "20px",
              borderRadius: "4px",
            }}
            variant="contained"
            color="error"
          >
            X
          </Button>
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            // padding: "15px",
            bgcolor: bodyColor,
            padding: "0",
            margin: "0",
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <Box sx={{overflow:"auto"}}>{children}</Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DiloagShow;

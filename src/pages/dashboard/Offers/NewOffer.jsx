import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { OfferId } from "./OfferId";
import { OfferRegion } from "./OfferRegion";
import { OfferLocation } from "./OfferLocation";
import { OfferImages } from "./OfferImages";
import { OfferDetail } from "./OfferDetail";
import { OfferOther } from "./OfferOther";
import { OfferCoverImage } from "./OfferCoverImage";
import BoxCom from "./BoxCom";
import { Button, Typography } from "@mui/material";

function NewOffer() {
  const [coverImage, setCoverImage] = useState([]);
  const [offerImage, setOfferImage] = useState([]);

  const [locationImage, setlocationImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);

  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isComment, setIsComment] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  // const clientId = useRef()
  const offerId = useRef();
  const offerDate = useRef();
  const offerType = useRef();
  /* ------------------ */
  const regon = useRef();
  const city = useRef();
  const dist = useRef();
  /* ------------------ */
  const price = useRef();
  const title = useRef();
  const detail = useRef();
  /* ------------------ */
  const locationRef = useRef();

  const offerTypeData = [
    { id: "1", value: "chocolate", label: "Chocolate" },
    { id: "2", value: "strawberry", label: "Strawberry" },
    { id: "3", value: "vanilla", label: "Vanilla" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("from NEWform offerId : ", offerId.current?.value);
    console.log("from NEWform offerDate : ", offerDate.current?.value);
    console.log("from NEWform offerType: ", offerType.current?.value);
    console.log("from NEWform regon: ", regon.current?.value);
    console.log("from NEWform city: ", city.current?.value);
    console.log("from NEWform dist: ", dist.current?.value);
    console.log("from NEWform price: ", price.current?.value);
    console.log("from NEWform isPriceShown ", isShowPrice);
    console.log("from NEWform isComment: ", isComment);
    console.log("from NEWform isOwner: ", isOwner);
    console.log("from NEWform title: ", title.current?.value);
    console.log("from NEWform detail: ", detail.current?.value);
   
    console.log("from NEWform location: ", locationImage);
    console.log("from NEWform offer images: ", imageToUpload);
    console.log("from NEWform coverImage: ", coverImage);


    alert("save");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
            padding: "2rem",
            width: "100%",
          }}
        >
          <BoxCom>
            <OfferId
              offerTypeData={offerTypeData}
              offerId={offerId}
              offerDate={offerDate}
              offerType={offerType}
            />
          </BoxCom>

          <BoxCom>
            <OfferRegion
              offerTypeData={offerTypeData}
              regon={regon}
              city={city}
              dist={dist}
            />
          </BoxCom>

          <BoxCom>
            <BoxCom>
              <OfferLocation
                locationRef={locationRef}
                locationImage={locationImage}
                setlocationImage={setlocationImage}
                
                
              />
              <OfferCoverImage 
              
              
               
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              
              
              
              />
              <OfferImages
                offerImage={offerImage}
                setOfferImage={setOfferImage}
                imageToUpload={imageToUpload}
                setImageToUpload={setImageToUpload}
              />
            </BoxCom>
          </BoxCom>

          <BoxCom>
            <OfferOther
              price={price}
              isShowPrice={isShowPrice}
              setIsShowPrice={setIsShowPrice}
              isComment={isComment}
              setIsComment={setIsComment}
              isOwner={isOwner}
              setIsOwner={setIsOwner}
            />
          </BoxCom>

          <BoxCom>
            <OfferDetail title={title} detail={detail} />
          </BoxCom>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: 2,
            position: "fixed",
            bottom: "10px",
            left: "5px",
            width: "100px",
            // height: "50px",
            // backgroundColor: "red",
            zIndex: 1000,
            boxShadow: 24,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            color={"warning"}
            type="submit"
            sx={{ fontFamily: "CairoBold" }}
          >
            حفظ
          </Button>
        </Box>
      </form>
    </>
  );
}

export default NewOffer;

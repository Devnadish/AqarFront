import React, { useState ,useEffect} from "react";
import glb from "../../../component/globalCpm";
import cpm from "./generalCpm";
import ImageUploadBtn from "../../../component/ImageUploadBtn/ImageUploadBtn";
function LocationInfo({
  Refadrs,
  Reflat,
  Refatt,
  Reflocation,
  data,
  mapimage,
  setMapImage,
}) {
  const [mapPreview, setMapPreview] = useState(null);
  
useEffect(() => {

  setMapPreview( import.meta.env.VITE_mainPageImage+"mapImage.jpg");
  

},[])


  const handleimage = (event) => {
    setMapImage((pre) => event.target.files[0]);

    setMapPreview(URL.createObjectURL(event.target.files[0]));
    console.log(logoPreview);
  };

  return (
    <>
      <cpm.CardWraper>
        <cpm.CardHeader> الموقع</cpm.CardHeader>
        <cpm.CardBody>
          <cpm.DataDiv>
            <glb.InputContainer>
              <glb.TXTLabel>العنوان</glb.TXTLabel>
              <cpm.TextInput
                defaultValue={data.data.adrs}
                placeholder="location"
                width={"100%"}
                ref={Refadrs}
                rows={"5"}
                name="adrs"
              />
            </glb.InputContainer>

            <glb.InputContainer>
              <glb.TXTLabel>خط الطول</glb.TXTLabel>
              <glb.Input
                defaultValue={data.data.lat}
                placeholder="lat"
                width={"100%"}
                ref={Reflat}
                name="lat"
              />
            </glb.InputContainer>
            <glb.InputContainer>
              <glb.TXTLabel>خط العرض</glb.TXTLabel>
              <glb.Input
                defaultValue={data.data.att}
                placeholder="lan"
                width={"100%"}
                ref={Refatt}
                name="lan"
              />
            </glb.InputContainer>
          </cpm.DataDiv>
          <cpm.ImageDataDiv>
            <cpm.ImageInput
              ref={Reflocation}
              // defaultValue={data.data.location}
              width={"30%"}
              placeholder="loc Image"
              name="locationImage"
              type="file"
              id="locationImage"
              hidden
              onChange={handleimage}
            />
            <ImageUploadBtn
              refid={Reflocation}
              imageLogo={mapimage}
              logoPreview={mapPreview}
              btnTitle={"الموقع"}
            />
          </cpm.ImageDataDiv>
        </cpm.CardBody>
      </cpm.CardWraper>
    </>
  );
}

export default LocationInfo;

import React from 'react'
import glb from "../../../component/globalCpm"
import cpm from "./generalCpm";

function LocationInfo({Refadrs, Reflat,  Refatt, Reflocation,data}) {
  return (
   <>
   
   <cpm.CardWraper>
            <cpm.CardHeader> الموقع</cpm.CardHeader>
            <cpm.CardBody>
              <glb.Input
                defaultValue={data.data.adrs}
                placeholder="location"
                width={"100%"}
                ref={Refadrs}
                name="adrs"
              />
              <glb.Input
                defaultValue={data.data.lat}
                placeholder="lat"
                width={"30%"}
                ref={Reflat}
                name="lat"
              />
              <glb.Input
                defaultValue={data.data.att}
                placeholder="lan"
                width={"30%"}
                ref={Refatt}
                name="lan"
              />
              <cpm.ImageLabelInput htmlFor="locationImage" width={"45%"}>
               صورة الخريطة
              </cpm.ImageLabelInput>
              <cpm.ImageInput
                ref={Reflocation}
                // defaultValue={data.data.location}
                width={"30%"}
                placeholder="loc Image"
                name="locationImage"
                type="file"
                id="locationImage"
                onChange={(e)=> setMapImage(pre=>e.target.files[0])}
              />
            </cpm.CardBody>
          </cpm.CardWraper>
   
   </>
     )
}

export default LocationInfo
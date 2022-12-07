import React from 'react'
import glb from "../../../component/globalCpm"
import cpm from "./generalCpm";

function MainPageInfo({Refherotext, Refheroimage, Refherodeail,data}) {
  return (
  <>
      <cpm.CardWraper>
            <cpm.CardHeader>الصفحة الرئسية</cpm.CardHeader>
            <cpm.CardBody>
              <glb.Input
                defaultValue={data.data.herotext}
                ref={Refherotext}
                width={"45%"}
                placeholder="herotext"
                name="heroText"
              />
              <cpm.ImageLabelInput htmlFor="HeroImage" width={"45%"}>
               صورة الواجهة الرئسيه
              </cpm.ImageLabelInput>
              <cpm.ImageInput
                ref={Refheroimage}
                width={"45%"}
                // defaultValue={data.data.heroimage}
                placeholder="heroimage"
                name="HeroImage"
                type={"file"}
                id="HeroImage"
                onChange={(e)=> setHeroImage(pre=>e.target.files[0])}
              
              />
              <cpm.TextInput
                defaultValue={data.data.herodeail}
                placeholder="heroDetail"
                width={"95%"}
                rows={"5"}
                name="HeroDetail"
                ref={Refherodeail}
              />
            </cpm.CardBody>
          </cpm.CardWraper>
  </>
  )
}

export default MainPageInfo
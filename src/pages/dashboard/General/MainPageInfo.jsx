import React, { useState } from "react";
import glb from "../../../component/globalCpm";
import cpm from "./generalCpm";
import ImageUploadBtn from "../../../component/ImageUploadBtn/ImageUploadBtn";

function MainPageInfo({
  Refherotext,
  Refheroimage,
  Refherodeail,
  data,
  heroimage,
  setHeroImage,
}) {
  const [heroPreview, setHeroPreview] = useState(null);

  const handleimage = (event) => {
    setHeroImage((pre) => event.target.files[0]);
    setHeroPreview(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <cpm.CardWraper>
        <cpm.CardHeader>الصفحة الرئسية</cpm.CardHeader>
        <cpm.CardBody>
          <cpm.DataDiv >
            <glb.InputContainer>
              <glb.TXTLabel>كلمة ترحبية</glb.TXTLabel>
              <glb.Input
                defaultValue={data.data.herotext}
                ref={Refherotext}
                width={"100%"}
                placeholder="herotext"
                name="heroText"
              />
            </glb.InputContainer>
            <glb.InputContainer>
              <glb.TXTLabel>نبذة عنك</glb.TXTLabel>
              <cpm.TextInput
                defaultValue={data.data.herodeail}
                placeholder="heroDetail"
                width={"100%"}
                rows={"5"}
                name="HeroDetail"
                ref={Refherodeail}
              />
            </glb.InputContainer>
          </cpm.DataDiv>

          <cpm.ImageDataDiv >
            <cpm.ImageInput
              ref={Refheroimage}
              width={"45%"}
              placeholder="heroimage"
              name="HeroImage"
              type={"file"}
              id="HeroImage"
              onChange={handleimage}
              hidden
            />
            <ImageUploadBtn
              refid={Refheroimage}
              logoPreview={heroPreview}
              btnTitle={"البنر"}
            />
          </cpm.ImageDataDiv>
        </cpm.CardBody>
      </cpm.CardWraper>
    </>
  );
}

export default MainPageInfo;

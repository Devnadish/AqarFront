import React from "react";
import glb from "../../../component/globalCpm";
import cpm from "./generalCpm";

function SoicalInfo({ Refemail, Refinstgram, Refsnapsot, Refwhatapp, data }) {
  return (
    <>
      <cpm.CardWraper>
        <cpm.CardHeader> التواصل الاجتماعي</cpm.CardHeader>
        <cpm.CardBody>
          <glb.InputContainer>
            <glb.TXTLabel>واتس اب</glb.TXTLabel>
            <glb.Input
              defaultValue={data.data.whatapp}
              width={"100%"}
              placeholder="whats app"
              ref={Refwhatapp}
              name="whatsapp"
            />
          </glb.InputContainer>
          <glb.InputContainer>
            <glb.TXTLabel>ايميل</glb.TXTLabel>

            <glb.Input
              defaultValue={data.data.email}
              width={"100%"}
              placeholder="email"
              ref={Refemail}
              name="email"
            />
          </glb.InputContainer>

          <glb.InputContainer>
            <glb.TXTLabel>انستجرام</glb.TXTLabel>
            <glb.Input
              defaultValue={data.data.instgram}
              width={"100%"}
              placeholder="instgram"
              ref={Refinstgram}
              name="instgram"
            />
          </glb.InputContainer>
          <glb.InputContainer>
            <glb.TXTLabel>سناب شت</glb.TXTLabel>
            <glb.Input
              defaultValue={data.data.snapsot}
              width={"100%"}
              placeholder="snapshot"
              ref={Refsnapsot}
              name="snapshot"
            />
          </glb.InputContainer>
        </cpm.CardBody>
      </cpm.CardWraper>
    </>
  );
}

export default SoicalInfo;

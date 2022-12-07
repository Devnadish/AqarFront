import React from 'react'
import glb from "../../../component/globalCpm"
import cpm from "./generalCpm";

function SoicalInfo({Refemail,    Refinstgram,    Refsnapsot,    Refwhatapp,data}) {
  return (
    <>
      <cpm.CardWraper>
            <cpm.CardHeader> التواصل الاجتماعي</cpm.CardHeader>
            <cpm.CardBody>
              <glb.Input
                defaultValue={data.data.email}
                width={"45%"}
                placeholder="email"
                ref={Refemail}
                name="email"
              />
              <glb.Input
                defaultValue={data.data.instgram}
                width={"45%"}
                placeholder="instgram"
                ref={Refinstgram}
                name="instgram"
              />
              <glb.Input
                defaultValue={data.data.snapsot}
                width={"45%"}
                placeholder="snapshot"
                ref={Refsnapsot}
                name="snapshot"
              />
              <glb.Input
                defaultValue={data.data.whatapp}
                width={"45%"}
                placeholder="whats app"
                ref={Refwhatapp}
                name="whatsapp"
              />
            </cpm.CardBody>
          </cpm.CardWraper>
    </>
  )
}

export default SoicalInfo
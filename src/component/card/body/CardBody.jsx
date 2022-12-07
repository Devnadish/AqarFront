import React from "react";
import cpm from "./cpm";
// import imgx from "../../../assets/img1.jpg";
function CardBody({ image, detail, id = 150 }) {
  return (
    <>
      <cpm.IdLink to={`/offer/${id}`}>
        <cpm.BodyWarper>
          <cpm.imageWarper>
            <cpm.Image src={image} loading="lazy" />
          </cpm.imageWarper>

          {/* ----------------------- */}
          <cpm.subTitleWarper>{detail}</cpm.subTitleWarper>
        </cpm.BodyWarper>
      </cpm.IdLink>
    </>
  );
}

export default CardBody;

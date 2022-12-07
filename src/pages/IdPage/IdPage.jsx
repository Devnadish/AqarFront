import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";

import { AiOutlineComment } from "react-icons/ai";
import GenralInfo from "./GenralInfo"
import Showimage from "./Showimage"
import cpm from "./idpagecpm";
import ShowVideo from "./video/ShowVideo"

function IdPage({ data }) {
  const { id } = useParams();
  const [mydata, seMydata] = useState({
    id: id,
    title: "فيلا بحي السلامة",
    crDate: "10-10-2001",
    stutes: "ايجار",
    detail: `فيلا رووف للبيع 7 وصاله
      حي الاخضر
      مساحه كبيره
      مدخل خاص
      310 م صافي البناء
      وجهه شرقيه
      مصعد موسس
      خزانات وعداد مستقل
      تتكون من/
      7غرف وصاله وسيعه
      -مجلس خارجي مع دوره مياه
      -مجلط
      -مطبخ مع مستودع خاص
      -مجلس نساء مع دوره مياه خاصةً
      -4غرف نوم منها غرفتين ماستر
      سطح وسيع
      (بسعر مميز)
      للاستفسار كلمني واتس او أتصال 
      نخلص لكم كل الامور البنكية ونسدد الدفعة الأولى`,
    location: "location",
  });
  const [show, setShow] = useState(1);
  const [comp, setComp] = useState(<GenralInfo id={id} mydata={mydata} />);

  return (
    <cpm.BodyWarper>
      <SideMenu comp={comp} setComp={setComp} id={id} mydata={mydata} />
      <ShowBox childern={comp} />
    </cpm.BodyWarper>
  );
}

export default IdPage;

const SideMenu = ({ comp = "x", setComp, id, mydata }) => {
  console.log(mydata.id);
  return (
    <>
      <cpm.SideMenu>
        <cpm.InnerSideMenu>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper
            onClick={() => {
              setComp(<GenralInfo id={id} mydata={mydata} />);
            }}
          >
            <MdOutlineRealEstateAgent />
          </cpm.SideIconWarper>
          {/* -------------------------------------- */}


          <cpm.SideIconWarper onClick={() => setComp(<Showimage />)}>
            <BsCardImage />
          </cpm.SideIconWarper>


          {/* -------------------------------------- */}
          <cpm.SideIconWarper onClick={() => setComp(<ShowVideo id={id} />)}>
            <AiOutlineVideoCamera />
          </cpm.SideIconWarper>
          {/* -------------------------------------- */}
          <cpm.SideIconWarper onClick={() => setComp(<Comments id={id} />)}>
            <AiOutlineComment />
          </cpm.SideIconWarper>
        </cpm.InnerSideMenu>
      </cpm.SideMenu>
    </>
  );
};

const ShowBox = ({ childern }) => {
  return (
    <>
      <cpm.ShowContentWarper>{childern} </cpm.ShowContentWarper>
    </>
  );
};


const Images = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>image </cpm.ContentWarper>
    </>
  );
};

const Videos = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>Videos </cpm.ContentWarper>
    </>
  );
};

const Comments = ({ id }) => {
  return (
    <>
      <cpm.ContentWarper>Comments </cpm.ContentWarper>
    </>
  );
};

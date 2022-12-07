import React, { useState } from "react";
import { toast } from "react-toastify";
import cpm from "./ContactCpm";
import { useGetdata } from "../../component/utils/hooks/useGetdata";
// import data from "./data.json";
import { ImClipboard } from "react-icons/im";

function Contact() {
  const [iscopy, setIscopy] = useState(false);

  const {data,isLoading}=useGetdata()
  if(isLoading){
    return <div>Loadin....</div>
  }



  const handleCopy = () => {
    navigator.clipboard.writeText(`${lat},${att}`);
    setIscopy(!iscopy);
    toast.success("تم حفظ الاحداثيات انسخها لجوجل ماب  لتصل الينا بالسلامة");
  };
  return (


    <cpm.BodyWarper>
      <cpm.RightArea>
        <cpm.Txt>رقم الجوال : {data.data?.phone}</cpm.Txt>
        <cpm.Txt>واتس : {data.data?.whatapp}</cpm.Txt>
        <cpm.Txt>العنوان : {data.data?.adrs}</cpm.Txt>
        <cpm.Txt>الايميل : {data.data?.email}</cpm.Txt>
        <cpm.Txt>سناب : {data.data?.snapsot}</cpm.Txt>
        <cpm.Txt>انستجرام : {data.data?.instgram}</cpm.Txt>

      </cpm.RightArea>
      {/* =============================================== */}
      <cpm.LeftArea>
        <cpm.HeroImageWarper>
          <cpm.Image src="./img/map1.jpg" />
        </cpm.HeroImageWarper>
        <cpm.FlexDiv direction="row">
          
          <cpm.Btn iscopy={iscopy} onClick={handleCopy}>
            {iscopy ? <>تم النسخ </> : <> نسخ</>}
          <ImClipboard/>
          </cpm.Btn>
          <cpm.Txt>خط الطول : {data.data?.lat}</cpm.Txt>
          <cpm.Txt>خط العرض : {data.data?.att}</cpm.Txt>
        </cpm.FlexDiv>
      </cpm.LeftArea>
    </cpm.BodyWarper>
  );
}

export default Contact;

import React, { useRef, useState, useEffect } from "react";
import cpm from "./generalCpm";
// import cpm from "../dashbordCpm";
import Card from "../CardCpm";
import glb from "../../../component/globalCpm"
import { useGetdata } from "../../../component/utils/hooks/useGetdata"
import axios from "axios";
import { toast } from "react-toastify";
// import {handleData} from "./function"

const Genral = () => {
  const [imageLogo,setImageLogo]=useState(null)
  const [heroimage,setHeroImage]=useState(null)
  const [mapimage,setMapImage]=useState(null)
  const Refid = useRef();
  const Refname = useRef();
  const Reflogo = useRef();
  const Refphone = useRef();
  const Refheroimage = useRef();
  const Refherotext = useRef();
  const Refherodeail = useRef();
  const Refemail = useRef();
  const Refsnapsot = useRef();
  const Refwhatapp = useRef();
  const Refinstgram = useRef();
  const Refadrs = useRef();
  const Reflat = useRef();
  const Refatt = useRef();
  const Reflocation = useRef();
  const RefFrom = useRef();

  const { data, isLoading, isFetched } = useGetdata();
  if (isLoading) {
    return <div>Loadin....</div>;
  }

 

    const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id",Refid.current.value)
    formData.append("name", Refname.current.value)
   
    formData.append("phone", Refphone.current.value)
    formData.append("herotext",Refherotext.current.value)
    formData.append("herodeail", Refherodeail.current.value,)
    formData.append("email",Refemail.current.value)
    formData.append("snapsot",Refsnapsot.current.value)
    formData.append("whatapp",Refwhatapp.current.value)
    formData.append("instgram", Refinstgram.current.value)
    formData.append("adrs",Refadrs.current.value)
    formData.append("lat",Reflat.current.value)
    formData.append("att", Refatt.current.value)
    formData.append("mapImage",  mapimage)
    formData.append("logoImage",imageLogo)
    formData.append("heroImage", heroimage)

    console.log(Array.from(formData));




    const sendData = axios
      .post("http://localhost:3009/aqar/savenewinfo", formData)
      .then(toast.info("بنجاح تم تاسيس المعلومات الاساسية للمنصة"));
  };

  return (
    <>
      <cpm.BodyWarper>
        <DataForm
          data={data}
          handleData={handleData}
          Refid={Refid}
          Refname={Refname}
          Reflogo={Reflogo}
          Refphone={Refphone}
          Refheroimage={Refheroimage}
          Refherotext={Refherotext}
          Refherodeail={Refherodeail}
          Refemail={Refemail}
          Refsnapsot={Refsnapsot}
          Refwhatapp={Refwhatapp}
          Refinstgram={Refinstgram}
          Refadrs={Refadrs}
          Reflat={Reflat}
          Refatt={Refatt}
          Reflocation={Reflocation}
          RefFrom={RefFrom}
          imageLogo={imageLogo}
          setImageLogo={setImageLogo}

          heroimage={heroimage}
          setHeroImage={setHeroImage}
          mapimage={mapimage}
          setMapImage={setMapImage}



        />
      </cpm.BodyWarper>
    </>
  );
};
export default Genral;

const DataForm = ({
  data,
  handleData,
  Refid,
  Refname,
  Reflogo,
  Refphone,
  Refheroimage,
  Refherotext,
  Refherodeail,
  Refemail,
  Refsnapsot,
  Refwhatapp,
  Refinstgram,
  Refadrs,
  Reflat,
  Refatt,
  Reflocation,
  RefFrom,
  imageLogo,
setImageLogo,
heroimage,
setHeroImage,
mapimage,
setMapImage,
}) => {



  const handleLogoImage=(e) => {
    setImageLogo(pre=>e.target.files[0])
   
  }



  return (
    <>
      <cpm.NormalDivr>
        <glb.Form onSubmit={handleData} id="myform"  >
          <cpm.CardWraper>
            <cpm.CardHeader>معلومات عامة</cpm.CardHeader>
            <cpm.CardBody>
              <glb.Input
                ref={Refid}
                defaultValue={data.data?.id}
                width={"10%"}
                placeholder="id"
                name="id"
                disabled
              />
              <glb.Input
                type="text"
                id="fname"
                name="name"
                defaultValue={data.data.name}
                ref={Refname}
                width={"80%"}
                placeholder="name"
              />
              <glb.Input
                defaultValue={data.data.phone}
                width={"45%"}
                placeholder="phone"
                maxLength="10"
                ref={Refphone}
                name="phone"
              />
              {/* <cpm.ImageLabelInput htmlFor="logoimage" width={"45%"}>
                صورة الشعار
              </cpm.ImageLabelInput> */}
              <input
                // ref={Reflogo}
                // placeholder="logoimage"
                // name="logoImage1"
                type="file"
                // id="logoimage"
                // accept=".jpg"
                // value={imageLogo}
                onChange={(e)=> setImageLogo(pre=>e.target.files[0])}
               
              />
            </cpm.CardBody>
          </cpm.CardWraper>

          {/* ---------------------------------------- */}
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

          <cpm.Btn type="submit">حفظ التعديلات</cpm.Btn>
        </glb.Form>
      </cpm.NormalDivr>
    </>
  );
};

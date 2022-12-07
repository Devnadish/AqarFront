import React, { useRef, useState, useEffect } from "react";
import cpm from "./generalCpm";
// import cpm from "../dashbordCpm";
import Card from "../CardCpm";
import glb from "../../../component/globalCpm";
import { useGetdata } from "../../../component/utils/hooks/useGetdata";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralInfo from "./GeneralInfo";
import SoicalInfo from "./SoicalInfo";
import LocationInfo from "./LocationInfo";

import MainPageInfo from "./MainPageInfo";
// import {handleData} from "./function"

const Genral = () => {
  const [imageLogo, setImageLogo] = useState(null);
  const [heroimage, setHeroImage] = useState(null);
  const [mapimage, setMapImage] = useState(null);
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
    formData.append("id", Refid.current.value);
    formData.append("name", Refname.current.value);

    formData.append("phone", Refphone.current.value);
    formData.append("herotext", Refherotext.current.value);
    formData.append("herodeail", Refherodeail.current.value);
    formData.append("email", Refemail.current.value);
    formData.append("snapsot", Refsnapsot.current.value);
    formData.append("whatapp", Refwhatapp.current.value);
    formData.append("instgram", Refinstgram.current.value);
    formData.append("adrs", Refadrs.current.value);
    formData.append("lat", Reflat.current.value);
    formData.append("att", Refatt.current.value);
    formData.append("mapImage", mapimage);
    formData.append("logoImage", imageLogo);
    formData.append("heroImage", heroimage);

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
  const handleLogoImage = (e) => {
    setImageLogo((pre) => e.target.files[0]);
  };

  return (
    <>
      <cpm.NormalDivr>
        <glb.Form onSubmit={handleData} id="myform">
          <GeneralInfo
            Refid={Refid}
            Refname={Refname}
            Reflogo={Reflogo}
            Refphone={Refphone}
            data={data}
            setImageLogo={setImageLogo}
            imageLogo={imageLogo}
          />
          <MainPageInfo
            Refherotext={Refherotext}
            Refheroimage={Refheroimage}
            Refherodeail={Refherodeail}
            data={data}
          />
          <SoicalInfo
            Refemail={Refemail}
            Refinstgram={Refinstgram}
            Refsnapsot={Refsnapsot}
            Refwhatapp={Refwhatapp}
            data={data}
          />
          <LocationInfo
            Refadrs={Refadrs}
            Reflat={Reflat}
            Refatt={Refatt}
            Reflocation={Reflocation}
            data={data}
          />

          <cpm.Btn type="submit">حفظ التعديلات</cpm.Btn>
        </glb.Form>
      </cpm.NormalDivr>
    </>
  );
};

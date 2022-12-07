import React from "react";
import cpm from "./Aboutcpm";
import data from "./data.json";
import { useGetdata } from "../../component/utils/hooks/useGetdata";

function About() {

  const {data,isLoading}=useGetdata()
  if(isLoading){
    return <div>Loadin....</div>
  }
  return (
    <cpm.BodyWarper>
      <cpm.ContentWarper>
        <cpm.HeroImageWarper>
          <HeroImage />
        </cpm.HeroImageWarper>

        <cpm.HeroTextWarper>
          <HeroText data={data}/>
        </cpm.HeroTextWarper>
      </cpm.ContentWarper>
    </cpm.BodyWarper>
  );
}

export default About;

const HeroImage = () => {
  
  return (
    <>
      <cpm.Image src={data.heroimage} loading="lazy"/>
    </>
  );
};
const HeroText = ({data}) => {
  console.log(data?.data)
  return (
    <>
      <cpm.HeroTitleHeader>{data.data?.herotext}</cpm.HeroTitleHeader>
      <cpm.HeroSubTitleWraper>
        <cpm.HeroSubTitle>{data.data?.herodeail}</cpm.HeroSubTitle>
      </cpm.HeroSubTitleWraper>
    </>
  );
};

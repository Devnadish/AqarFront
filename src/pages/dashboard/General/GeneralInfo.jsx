import React,{useState} from 'react'
import glb from "../../../component/globalCpm"
import cpm from "./generalCpm";
import ImageUploadBtn from '../../../component/ImageUploadBtn/ImageUploadBtn';
function GeneralInfo({Refid,Refname,Refphone,Reflogo,data,setImageLogo,imageLogo}) {
  const [logoPreview,setLogoPreview]=useState(null)


  const handleimage=(event) => {
      setImageLogo(pre=>event.target.files[0])

      setLogoPreview(URL.createObjectURL(event.target.files[0]))
      console.log(logoPreview)
  }



  return (
     <>
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
                      hidden
                    />
            <glb.InputContainer >
                <glb.TXTLabel>الاسم</glb.TXTLabel>
              
              <glb.Input
                type="text"
                id="fname"
                name="name"
                defaultValue={data.data.name}
                ref={Refname}
                width={"100%"}
                placeholder="name"
              />
               </glb.InputContainer>
               <glb.InputContainer>
                <glb.TXTLabel>الجوال</glb.TXTLabel>

              <glb.Input
                defaultValue={data.data.phone}
                width={"70%"}
                placeholder="phone"
                maxLength="10"
                ref={Refphone}
                name="phone"
              />
               </glb.InputContainer>
              {/* <cpm.ImageLabelInput htmlFor="logoimage" width={"45%"}>
                صورة الشعار
              </cpm.ImageLabelInput>  */}
              <input
                ref={Reflogo}
                name="logoImage"
                type="file"
                id="logoimage"
                accept=".jpg"
                hidden
                // value={imageLogo}
                onChange={ handleimage}
               
              />
              <ImageUploadBtn  refid={Reflogo} imageLogo={imageLogo} logoPreview={logoPreview}/>
            </cpm.CardBody>



          </cpm.CardWraper>
     </>
  )
}

export default GeneralInfo
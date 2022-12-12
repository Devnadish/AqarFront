import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import React,{useState} from "react";
import DiloagShow from "../../../component/dailog/DiloagShow"
import glb from "../../../component/globalCpm";

const Dropzone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 203, 203);
  width: 100%;
  height: 70px;
  border-radius: 4px;
`;

const Text = styled.p`
  border: dotted #555 2px;
  border-radius: 4px;
  width: 97%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
`;

const ImageWreaper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  position: relative;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const RemoveImage = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  outline: none;
  border: 0;
  background-color: rgba(255, 255, 255, 0.4);
`;

function MultiImageUploader({ files, setFiles, maxUpload, isMulti }) {
  
  const [open, setOpen] = useState(false);
  const [bigImage, setBigImage] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept:   {
      'image/*': ['.jpeg', '.jpg', '.png'],
     },
    maxFiles: maxUpload,
    multiple: isMulti,
    
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            
          })
        )
      );
      console.log(acceptedFiles);
    },
  });

  // const images = files.map((file) => (
  //   <>
  //   <ImageWreaper>
  //   <ImagePreview
  //     key={file.name}
  //     src={file.preview}
  //     alt="image"
  //   />
  //   <button>delete</button>
  //   </ImageWreaper>
  //   </>
  // ));

  const PreviewImage = () => {

const handleClike=(I)=>{
  setBigImage(pre=>I)
   setOpen(true)

}


const removeFile =   (I,e) => {
  e.preventDefault()
  e.stopPropagation()
  const newFiles = [...files]
  newFiles.splice(newFiles.indexOf(I), 1)
  setFiles(newFiles)
}

    return (
      <>
        {files.map((file) => (
          <React.Fragment key={file.name}>
            <ImageWreaper >
              <ImagePreview src={file.preview} alt="image" onClick={()=>handleClike(file.preview)}/>
              <RemoveImage onClick={(e)=>removeFile(file.preview,e)} >X</RemoveImage>
            </ImageWreaper>
           
            {open   ? (
        <DiloagShow open={open} toggle={setOpen}>
          <glb.Image src={bigImage} />
        </DiloagShow>
        
      ) : null}

          </React.Fragment>
        ))}
        
      </>
    );
  };

  return (
    <>
      <Dropzone {...getRootProps()}>
        <input type="file" {...getInputProps()} />
        <Text className="text">اضغط هنا او اسحب الملفات</Text>
      </Dropzone>
      <ImageContainer>
        <PreviewImage />
      </ImageContainer>
    </>
  );
}

export default MultiImageUploader;

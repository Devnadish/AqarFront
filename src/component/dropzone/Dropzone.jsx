import React, { useState,useCallback} from "react";
import { useDropzone } from "react-dropzone";


// const  Dropzone=()=> {
//     const onDrop = useCallback(acceptedFiles => {
//      console.log(acceptedFiles)
//     }, [])
//     const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
//     return (
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         {
//           isDragActive ?
//             <p>Drop the files here ...</p> :
//             <p>Drag 'n' drop some files here, or click to select files</p>
//         }
//       </div>
//     )
//   }






function Dropzone() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      // console.log(acceptedFiles);
    },
  });

  const images = files.map((file) => (
    <img
      key={file.name}
      src={file.preview}
      alt="image"
      style={{ width: "200px", height: "200px" }}
    />
  ));

  return (
    <>
      <div className="dropzone" {...getRootProps()}>
        <input type="file" {...getInputProps()} />
        <p className="text">drag files</p>
      </div>
      <div>{images}</div>
    </>
  );
}

export default Dropzone;

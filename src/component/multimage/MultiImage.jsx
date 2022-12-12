import React, { useState } from "react";
import "./mutliimage.css";

function MultiImage({selectedImages, setSelectedImages,imageToUload,setImageToUload}) {
 

  const onSelectFile = (event) => {


    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setImageToUload(selectedFiles)
    
      


    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    setImageToUload(imageToUload.filter((e) => e !== image))
    URL.revokeObjectURL(image);
  }
 

  return (
    <>
      <section>
{/* inpu images --------------------------- */}
        <label className="imagelabel">
          + صور العرض
          <input
            type="file"
            name="images"
            onChange={(event)=>onSelectFile(event)}
            multiple
            accept="image/png , image/jpeg, image/webp"
            style={{
              display: "none",
            }}
          />
        </label>
        <input type="file" multiple />
{/* check image count not exceed 10 image */}
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              مسموج 10 صور <br />
              <span>
                يجب مسح <b> {selectedImages.length - 10} </b>  
              </span>
            </p>
          ) : (null) )}
{/* showing image Preview  */}
        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image"> 
                  <img src={image} height="200" alt="upload" />
                    <button onClick={() => deleteHandler(image)}> X </button>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default MultiImage;

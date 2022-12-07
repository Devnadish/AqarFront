import React from "react";
import cpm from "./videCpm"
 

const ShowVideo = ({videoId="OzISPBpzwkI"}) => {
  return (
    <cpm.Container>
      <cpm.Content>
        <cpm.VideoWrapper>
        <cpm.Styleiframe>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            // frameborder="1"
            // frame
            allowfullscreen
          ></iframe>
          </cpm.Styleiframe>
        </cpm.VideoWrapper>
        
        <cpm.Hr />
       
      </cpm.Content>
      
    </cpm.Container>
  );
};

export default ShowVideo;

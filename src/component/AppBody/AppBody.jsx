import React from 'react'
import MiniCard from "../card/MiniCard";
import styled from "styled-components";
import data from "./data.json"

const Container=styled.div` 
display: flex;
flex-wrap: wrap;
align-items:center;
min-height:10%;
justify-content: space-evenly;
align-items:center;
gap: 2rem;
height:  calc(100vh - 120px);
padding: 1em;
overflow: auto;
 
 

@media only screen and (max-width: 500px) {
    flex-direction: column;
    /* background-color: red; */
    overflow: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

`;

function AppBody() {
  return (
    <>
      <Container>
        {data.map((el) => {
          return (
          <React.Fragment key={el.id}>
           <MiniCard  data={el} />
          </React.Fragment>)
        })}
        
      </Container>
    </>
  );
}

export default AppBody
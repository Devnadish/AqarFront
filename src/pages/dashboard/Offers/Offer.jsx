import React, { useState } from "react";
import cpm from "../dashbordCpm";
import Card from "../CardCpm";
import Select from "react-select"
import { useGetdata } from "../../../component/utils/hooks/useGetdata";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import DiloagShow from "../../../component/dailog/DiloagShow";
import NewOffer from "./NewOffer";

const options = [
  { id: 'value1', name: 'label1'},
  { id: 'value2', name: 'label2'},
  { id: 'value3', name: 'label3'},
]
export const Offer = () => {
  const [open, setOpen] = useState(false);
 
  
  return (
    <>
      
      <Select
      type="number"
        options={options}
        getOptionLabel={(options) => options['name']}
        getOptionValue={(options) => options['id']}
      />
      
      <cpm.BodyWarper>
       
      


        <Card.OfferNormalDivr>
          <button onClick={() => setOpen(true)}>new</button>
          <NewCard offerId={"150 "} title={"فيلا "} />
        </Card.OfferNormalDivr>
      </cpm.BodyWarper>
      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          Xfullscreen={true}
          title={"عرض جديد"}
        >
          <NewOffer />
        </DiloagShow>
      )}
    </>
  );
};



const NewCard = ({ title, offerId }) => {
  return (
    <>
      <Card.OfferCardWraper>
        <Card.OfferCardHeader>{title}</Card.OfferCardHeader>
        <Card.CardBody>{offerId}</Card.CardBody>
      </Card.OfferCardWraper>
    </>
  );
};

import React from "react";
import cpm from "../dashbordCpm";
import Card from "../CardCpm";
import { useGetdata } from "../../../component/utils/hooks/useGetdata";
import axios from "axios";
import { toast } from "react-toastify";

export const Offer = () => {
  return (
    <>
      <cpm.BodyWarper>
        
        <Card.OfferNormalDivr>
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
          <NewCard id={"150 "} title={"فيلا "} />
        </Card.OfferNormalDivr>
      </cpm.BodyWarper>
    </>
  );
};

const NewCard = ({ title, id }) => {
  return (
    <>
      <Card.OfferCardWraper>
        <Card.OfferCardHeader>
          {id}/{title}
        </Card.OfferCardHeader>
        <Card.CardBody></Card.CardBody>
      </Card.OfferCardWraper>
    </>
  );
};

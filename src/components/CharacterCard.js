import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// import styled from "styled-components";

export default function CharacterCard(props) {
  return (
    <div>
      {/* <span>todo: character</span> */}
      <Card>
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle>{props.char.location.name}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.char.image} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>{props.char.species}</CardSubtitle>
          <CardSubtitle>{props.char.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

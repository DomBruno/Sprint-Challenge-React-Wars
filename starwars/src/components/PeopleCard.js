import React from "react";
import { MasterDiv, DetailDiv } from "./Styles.js";

const PeopleCard = props => {
  return (
    <>
      <MasterDiv className="masterDiv">
        <h1>{props.data.name}</h1>
        <h2>Details:</h2>
        <DetailDiv className="detailDiv">
          <p>Birth Year: {props.data.birth_year}</p>
          <p>Gender: {props.data.gender}</p>
          <p>Eye Color: {props.data.eye_color}</p>
          <p>Skin Color: {props.data.skin_color}</p>
          <p>Hair Color: {props.data.hair_color}</p>
          <p>Height: {props.data.height}cm</p>
          <p>Weight: {props.data.mass}kg</p>
        </DetailDiv>
      </MasterDiv>
    </>
  );
};

export default PeopleCard; 
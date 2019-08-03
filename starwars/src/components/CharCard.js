import React from "react";
import { Container, Header } from 'semantic-ui-react'

const CharCard = props => {
  return (
    <>
      <Container text>
      <Header as='h2'>{props.data.name}</Header>
        <h2>Details:</h2>
          <p>Birth Year: {props.data.birth_year}</p>
          <p>Gender: {props.data.gender}</p>
          <p>Eye Color: {props.data.eye_color}</p>
          <p>Skin Color: {props.data.skin_color}</p>
          <p>Hair Color: {props.data.hair_color}</p>
          <p>Height: {props.data.height}cm</p>
          <p>Weight: {props.data.mass}kg</p>
        </Container>
    </>
  );
};

export default CharCard; 
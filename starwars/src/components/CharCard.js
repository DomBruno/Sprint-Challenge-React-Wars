import React from "react";
import { Container, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 

const CharCard = props => {
  return (
    <>
      <Container text>
      <Header as='h2'>{props.data.name}</Header>
        <h2>Details:</h2>
        <Segment.Group>
          <Segment>Birth Year: {props.data.birth_year}</Segment>
          <Segment>Gender: {props.data.gender}</Segment>
          <Segment>Eye Color: {props.data.eye_color}</Segment>
          <Segment>Skin Color: {props.data.skin_color}</Segment>
          <Segment>Hair Color: {props.data.hair_color}</Segment>
          <Segment>Height: {props.data.height}cm</Segment>
          <Segment>Weight: {props.data.mass}kg</Segment>
          </Segment.Group>
        </Container>
    </>
  );
};

export default CharCard; 
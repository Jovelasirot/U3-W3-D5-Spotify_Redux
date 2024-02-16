import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyFavorite = () => {
  const favorites = useSelector((state) => state.music.favorites);

  return (
    <>
      <Container>
        <Row>
          <ListGroup>
            {favorites.map((song, index) => (
              <ListGroup.Item key={index}>{song.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

export default MyFavorite;

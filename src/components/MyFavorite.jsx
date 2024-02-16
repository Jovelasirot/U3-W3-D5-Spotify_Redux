import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyFavorite = () => {
  const favorites = useSelector((state) => state.fav.content);

  return (
    <>
      <Container>
        <Row className="flex-column  text-light g-4">
          <h1>Your favorites songs</h1>
          {favorites.map((song, index) => (
            <Col
              key={index}
              className="d-flex align-items-center justify-content-between border border-dark"
            >
              <img src={song.album.cover} alt={song.title} className="me-5" />
              <div className="flex-grow-1">
                <p>{song.title} </p>
                <p>{song.artist.name} </p>
              </div>
              <div>
                <i className="bi-heart-fill"></i>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyFavorite;

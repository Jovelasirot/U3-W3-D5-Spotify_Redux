import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.music.selected);
  const dispatch = useDispatch();

  // const toggleFavorite = () => {
  //   dispatch(addToFavAction(selectedSong));
  // };

  return (
    <Container fluid className="mx-0 ps-0">
      <Row className="bg-dark text-light">
        <Col className="d-flex align-items-center">
          {selectedSong && (
            <>
              <img src={selectedSong.album.cover_medium} alt="" />
              <div>
                <p>{selectedSong.title}</p>

                {selectedSong.artist && <p>{selectedSong.artist.name}</p>}
              </div>
            </>
          )}
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <i
              className={`bi ${
                selectedSong.isFavorite ? "bi-heart-fill" : "bi-heart"
              }`}
            ></i>
          </div>
          <div>
            <i className="bi bi-chevron-double-left"></i>
          </div>
          <div>
            <i className="bi bi-play"></i>
          </div>
          <div>
            <i className="bi bi-chevron-double-right"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;

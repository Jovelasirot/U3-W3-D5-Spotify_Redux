import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToFavAction } from "../redux/actions";

const Player = () => {
  const selectedSong = useSelector((state) => state.music.selected);
  const favorites = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(addToFavAction(selectedSong));
  };

  const isFavorite = favorites.some((song) => song.id === selectedSong.id);

  return (
    <Container fluid className="mx-0 ps-0">
      <Row className="bg-dark text-light">
        <Col className="d-flex align-items-center">
          {selectedSong.length !== 0 && selectedSong.album && (
            <>
              <img src={selectedSong.album.cover} alt="" />
              <div className="ms-2">
                <p>{selectedSong.title}</p>
                {selectedSong.artist && <p>{selectedSong.artist.name}</p>}
              </div>
            </>
          )}
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div onClick={toggleFavorite}>
            {isFavorite ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
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

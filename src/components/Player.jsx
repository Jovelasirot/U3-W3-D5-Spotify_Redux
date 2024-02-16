import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToFavAction } from "../redux/actions";

const Player = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const selectedSong = useSelector((state) => state.selected);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const toggleFavorite = () => {
    dispatch(addToFavAction(selectedSong));
  };

  return (
    <Container fluid className="mx-0 ps-0">
      <Row className="bg-dark text-light w">
        <Col className="d-flex">
          <img src={selectedSong.album.cover_medium} alt="" />
          <div>
            <p>{selectedSong.title}</p>
            <p>{selectedSong.artist.name}</p>
          </div>
        </Col>
        <Col className="d-flex">
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

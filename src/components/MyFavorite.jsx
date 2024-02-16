import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavAction, resetFavList } from "../redux/actions";

const MyFavorite = () => {
  const favorites = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();

  const handleRemove = (i) => {
    alert("Song removed from favorites");
    dispatch(removeFromFavAction(i));
  };

  const handleReset = () => {
    const resetConfirm = window.confirm(
      "Are you sure you want to reset your favorites songs list?"
    );

    if (resetConfirm) {
      const sureResetConfirm = window.confirm("Are you sure?");
      if (sureResetConfirm) {
        const sureSureResetConfirm = window.confirm(
          `Are you sure SURE (; ☉_☉)?`
        );
        if (sureSureResetConfirm) {
          dispatch(resetFavList());
          alert("List has been reseted");
        }
      }
    } else {
      alert("The reset was canceled");
    }
  };

  return (
    <>
      <Container>
        <Row className="flex-column  text-light g-4">
          <div className="d-flex align-items-center  justify-content-between mt-5">
            <h1>Your favorites songs</h1>
            <span>
              <Button
                variant="danger"
                className="mb-2"
                onClick={() => handleReset()}
              >
                RESET <i className="bi bi-x-circle"></i>
              </Button>
            </span>
          </div>

          {favorites.map((song, i) => (
            <Col
              key={i}
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
              <div>
                <i
                  className="bi bi-x-circle-fill ms-3 text-danger"
                  onClick={() => handleRemove(i)}
                ></i>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyFavorite;

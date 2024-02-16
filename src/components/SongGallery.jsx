import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusicAction } from "../redux/actions";
import SingleMusic from "./SingleMusic";

// eslint-disable-next-line react/prop-types
const SongGallery = ({ playlist }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicAction(playlist));
  }, [dispatch, playlist]);

  const musicData = useSelector((state) => state.music.results);
  const loading = useSelector((state) => state.music.loading);
  const error = useSelector((state) => state.music.error);
  return (
    <Container fluid>
      <h1 className="text-light">{playlist}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : musicData.length > 0 ? (
        <Row className="text-light g-5" xs={1} md={3} xl={4}>
          <SingleMusic data={musicData} />
        </Row>
      ) : (
        <p className="text-light">No data available</p>
      )}
    </Container>
  );
};

export default SongGallery;

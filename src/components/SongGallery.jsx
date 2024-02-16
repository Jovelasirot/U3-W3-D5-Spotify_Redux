import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusicAction } from "../redux/actions";
import SingleMusic from "./SingleMusic";
import Player from "./Player";

// eslint-disable-next-line react/prop-types
const SongGallery = ({ playlist }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const handleSelectSong = (song) => {
    setSelectedSong(song);
    console.log("ffffff", song);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicAction(playlist));
  }, [dispatch, playlist]);

  const musicData = useSelector((state) => state.music.results);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    <>
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
      <Container fluid className="mx-0 ps-0">
        <Player />
      </Container>
    </>
  );
};

export default SongGallery;

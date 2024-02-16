import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions";

const SingleMusic = ({ data }) => {
  const dispatch = useDispatch();

  const handleSongClick = (song) => {
    dispatch(selectSongAction(song));
    console.log(song);
  };

  return (
    <>
      {data.slice(0, 4).map((song) => (
        <Col key={song.id} onClick={() => handleSongClick(song)}>
          <div className="d-flex flex-column">
            <img src={song.album.cover_medium} alt={song.title} />
            <p className="text-center">{song.title}</p>

            {song.artist && <p className="text-center">{song.artist.name}</p>}
          </div>
        </Col>
      ))}
    </>
  );
};

SingleMusic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      album: PropTypes.shape({
        cover_medium: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
      artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default SingleMusic;

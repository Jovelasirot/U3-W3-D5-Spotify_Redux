import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFavAction } from "../redux/actions";

// eslint-disable-next-line react/prop-types
const SingleMusic = ({ data }) => {
  const dispatch = useDispatch();
  const handleSongClick = (song) => {
    dispatch(addToFavAction(song));
    console.log(song);
  };
  return (
    <>
      {data.slice(0, 4).map((song) => (
        <Col key={song.id} onClick={() => handleSongClick(song)}>
          <div className="d-flex flex-column">
            <img src={song.album.cover_medium} alt={song.title} />
            <p className="text-center">{song.title}</p>
            <p className="text-center">{song.id}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

SingleMusic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      album: PropTypes.shape({
        cover_medium: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SingleMusic;

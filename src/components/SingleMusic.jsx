import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const SingleMusic = ({ data }) => {
  return (
    <>
      {data.slice(0, 4).map((song, index) => (
        <Col key={index}>
          <div className="d-flex flex-column">
            <img src={song.album.cover_medium} alt={song.title} />
            <p className="text-center">{song.title}</p>
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

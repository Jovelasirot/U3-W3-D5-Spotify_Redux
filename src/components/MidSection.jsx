import { Col, Container, Row } from "react-bootstrap";
import MainLinks from "./MainLInks";
import SongGallery from "./SongGallery";
import Player from "./Player";

const MidSection = () => {
  return (
    <div>
      <Container>
        <MainLinks />
        <Row className="flex-column gy-3 ">
          <Col>
            <SongGallery playlist="Joji" />
          </Col>
          <Col>
            <SongGallery playlist="Joji" />
          </Col>
          <Col>
            <SongGallery playlist="Joji" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Player />
      </Container>
    </div>
  );
};

export default MidSection;

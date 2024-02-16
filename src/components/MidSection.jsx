import { Col, Container, Row } from "react-bootstrap";
import MainLinks from "./MainLInks";
import SongGallery from "./SongGallery";
import Player from "./Player";

const MidSection = () => {
  return (
    <div className="vh-100">
      <Container>
        <MainLinks />
        <Row className="flex-column gy-3 ">
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

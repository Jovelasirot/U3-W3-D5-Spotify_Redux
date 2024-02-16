import { Col, Container, Row } from "react-bootstrap";
import MainLinks from "./MainLInks";
import SongGallery from "./SongGallery";
import Player from "./Player";

const MidSection = () => {
  return (
    <>
      <Container>
        <MainLinks />
        <Row className="flex-column gy-3 ">
          <Col>
            <SongGallery playlist="Queen" />
          </Col>
          <Col>
            <SongGallery playlist="50Cent" />
          </Col>
          <Col>
            <SongGallery playlist="Joji" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mx-0 ps-0  ">
        <Player />
      </Container>
    </>
  );
};

export default MidSection;

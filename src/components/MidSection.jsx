import { Col, Container, Row } from "react-bootstrap";
import MainLinks from "./MainLInks";
import SongGallery from "./SongGallery";
import Player from "./Player";
import { useState } from "react";

const MidSection = () => {
  return (
    <>
      <Container className="vh-100">
        <MainLinks />
        <Row className="flex-column gy-3 ">
          <Col>
            <SongGallery playlist="Joji" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MidSection;

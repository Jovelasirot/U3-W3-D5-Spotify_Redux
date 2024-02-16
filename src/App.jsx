import { Col, Container, Row } from "react-bootstrap";
import MidSection from "./components/MidSection";
import SideBar from "./components/SideBar";
import Player from "./components/Player";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-primary d-sm-none d-md-block">
          <SideBar />
        </Col>
        <Col xs={12} md={9} className="flex-grow-1">
          <MidSection />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

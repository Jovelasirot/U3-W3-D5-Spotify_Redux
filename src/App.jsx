import { Col, Container, Row } from "react-bootstrap";
import MidSection from "./components/MidSection";
import SideBar from "./components/SideBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-primary d-sm-none d-md-block">
            <SideBar />
          </Col>
          <Col xs={12} md={9} className="flex-grow-1">
            <Routes>
              <Route path="/" element={<MidSection />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;

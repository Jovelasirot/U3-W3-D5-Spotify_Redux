import { Col, Nav, Row } from "react-bootstrap";

const MainLinks = () => {
  return (
    <Row className="fw-semibold mt-3 text-secondary just mb-5 ">
      <Col className="text-end">
        <Nav.Item>
          <Nav.Link href="/home">TRENDING</Nav.Link>
        </Nav.Item>
      </Col>
      <Col className="text-end">
        <Nav.Item>
          <Nav.Link href="/home">PODCAST</Nav.Link>
        </Nav.Item>
      </Col>
      <Col className="text-end">
        <Nav.Item>
          <Nav.Link href="/home">MOODS AND GENRES</Nav.Link>
        </Nav.Item>
      </Col>
      <Col className="text-end">
        <Nav.Item>
          <Nav.Link href="/home">NEW RELEASES</Nav.Link>
        </Nav.Item>
      </Col>
      <Col className="text-end">
        <Nav.Item>
          <Nav.Link href="/home">DISCOVER</Nav.Link>
        </Nav.Item>
      </Col>
    </Row>
  );
};

export default MainLinks;

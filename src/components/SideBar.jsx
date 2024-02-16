import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import logoSideBar from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBar = () => {
  return (
    <Container>
      <Row className="flex-column text-light fs-5 mt-3 gy-2 vh-100 justify-content-between">
        <Col>
          <Col>
            <img
              src={logoSideBar}
              alt="logo sidebar"
              className="img-fluid w-75 mb-4"
            />
          </Col>
          <p>
            <i className="bi bi-house-door-fill me-2"></i>Home
          </p>
          <Col>
            <p>
              <i className="bi bi-book-fill me-2"></i>Your Library
            </p>
          </Col>
          <Col>
            <InputGroup className="mt-3">
              <InputGroup className="mt-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  className="form-control"
                />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Col>
        <Col className="d-flex flex-column justify-content-end align-items-center">
          <Button variant="light" className="w-100 mb-2 rounded-5">
            Sign up
          </Button>
          <Button className="w-100 border border-light rounded-5">
            Log in
          </Button>
          <span className="text-secondary">Cookie Policy | Privacy</span>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;

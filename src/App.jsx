import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Animated } from "react-animated-css";
import "animate.css";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UrlBar from "./components/UrlBar";

function App() {
  return (
    <div>
      <AppNav />
      <Introduce />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function AppNav() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">MONEY</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <UrlBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Introduce() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <Animated animationIn="fadeIn">
              <span className="tagline">Full Stack Engineer</span>
              <h1>
                Hi! I'm <strong className="primary-text">MONEY</strong>
              </h1>
              <p>
                I have been coding for 12 years, from java backend to typescript
                and rust Full-Stack Engineer.
                <br />
                Now also learnt 3d modeling, After Effects, Photoshop and Drawn
                my avatars myself.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </Animated>
          </Col>
          <Col xs={12} md={6} xl={5} className="p-4">
            <Animated animationIn="zoomIn">
              <img
                src="img/logo.jpg"
                alt="Header Img"
                className="logo animate__animated animate__pulse animate__infinite animate__slow"
              />
            </Animated>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;

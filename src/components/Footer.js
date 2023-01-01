import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import caffiene from '../assets/img/caffiene.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center" >
                    <Col sm={2} className="text-center text-sm-start" >
                    </Col>
                    <Col>
                    <p >Made with Love and <img src={caffiene} height="5px" width="5px" alt="caffiene"/> </p>
                    </Col>
                    <Col sm={5} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/aditya-upadhyay1/"><img src={navIcon1}/></a>
                            <a href="https://github.com/adiupd123"><img src={navIcon2}/></a>
                            <a href="https://twitter.com/adityaupd123"><img src={navIcon3}/></a>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={16} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{'Hi, I\'m webdecoded'}<span className="wrap">Android Developer</span></h1>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem ipsum </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
import React  from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function Projects() {

    return (
        <div id="contact">

        <Container fluid style={{ textAlign: "center" }}>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <h1 classname="display-1">Contact me</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="6">

                <p>Find me on <a href="https://github.com/stevethomas13">GitHub</a> or <a href="https://www.linkedin.com/in/steve-thomas-in/">LinkedIn</a> </p>

            </Col>
        </Row>

        

    </Container>
        </div>

    );
}
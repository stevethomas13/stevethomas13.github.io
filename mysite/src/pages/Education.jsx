import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function About() {
    return (
        <div id="education">
            <Container fluid style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 classname="display-1">Education</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <p>
                            I'm a Computer Science and Business student at Trinity, currently delving into the dynamic intersection of technology and business. In my second year, I completed a NFQ Level 7 course in Innovation and Entrepreneurship, fueling my passion for creative problem-solving and strategic thinking.
                        </p>
                    </Col>
                </Row>

                

            </Container>

        </div>
    );
};


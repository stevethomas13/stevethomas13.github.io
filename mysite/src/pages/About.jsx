import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function About() {
    return (
        <div id="about">
            <Container fluid style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 classname="display-1">About me!</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h3>Education</h3>
                        <p>
                            I'm a Computer Science and Business student at Trinity, currently delving into the dynamic intersection of technology and business. In my second year, I completed a NFQ Level 7 course in Innovation and Entrepreneurship, fueling my passion for creative problem-solving and strategic thinking.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h3>Experience</h3>
                        <p><b>Musgrave Group</b></p>
                        <p>
                            In my role as a Supply Chain Project Manager at Musgrave, I successfully led the Recoup Process at the CDC Blanchardstown depot, achieving an impressive jump in recoup rates from 35% to 83%. This not only resulted in substantial annual savings but also showcased my ability to excel under budget constraints and tight deadlines.
                        </p>
                        <p><b>Formula Trinity</b></p>
                        <p>
                            At Formula Trinity, my focus on financial management and strategic sponsorships honed my skills in budgeting, financial planning, and relationship building.
                        </p>
                        <p><b>ProtexAI</b></p>
                        <p>
                        As a junior consultant with the Irish Student Consulting Group, I collaborated with ProtexAI, contributing to their online visibility and market reach through effective SEO strategies.
                        </p>
                    </Col>
                </Row>

                

            </Container>

        </div>
    );
};


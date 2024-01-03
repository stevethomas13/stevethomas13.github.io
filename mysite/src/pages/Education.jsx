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
                        <p><b>Computer Science and Business @ Trinity College, 2021-2025</b></p>
                        <p>Current Grade: 1.1 (4.0 GPA) </p>
                        <p> Societies and clubs: DU Computer Science Society, Formula Trinity, Irish Student Consulting Group, Trinity Student Managed Fund, UDOMA </p>
                        <p>Positions held: Finance and Sponsorship Team - Formula Trinity, Global Ambassador, Lab Demonstrator for CSU22014 - Systems Programming, Junior Consultant - ISCG, OCM - Udoma Council </p>
                        <p><b>Innovation and Entrepreneurship @ Trinity College, 2022-2023 </b></p>
                        <p>Final Grade: 2.1 (3.7 GPA) </p>
                    </Col>
                </Row>
                

                

            </Container>

        </div>
    );
};


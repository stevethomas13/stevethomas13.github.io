import React  from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function Projects() {

    return (
        <div>

        <Container fluid style={{ textAlign: "center" }}>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <h1 classname="display-1">Skills</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="6">

            
            <p><b>Langagues: </b> Python, C/C++, C#, Java, VueJs, Django, React.js </p>

            <p><b>Tools: </b> Git, Docker, OpenCV, MediaPipe, Figma, sklearn, pandas, .NET, UWP, Stereokit, Agile Development, Six Sigma, Lean methodology</p>

            <p><b>Domain: </b> Image Recognition, Machine Learning, Data Science, Augmented/Virtual Development   </p>
            </Col>
        </Row>

        

    </Container>
        </div>

    );
}
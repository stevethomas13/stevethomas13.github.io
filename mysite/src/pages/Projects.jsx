import React  from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function Projects() {

    return (
        <div id="projects">

        <Container fluid style={{ textAlign: "center" }}>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <h1 classname="display-1">Projects</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <a href="https://github.com/stevethomas13/SWENG_Group_27"><p><b>Hololens 2 Game: "CHIPZ"</b></p></a>
                <p>In "Chipz," players are immersed in a first-person shooter experience that capitalizes on the capabilities of the Hololens 2 for an interactive real-time mixed reality adventure. Using StereoKit, and OpenXR, the game offers a dynamic environment where players actively throw projectiles at both moving and static targets. The integration of in-game physics enhances the realism, creating real-time interactions between the thrown projectiles and the designated targets. </p>
                <p>The development of "Chipz" is underpinned by a robust foundation, including a comprehensive CI/CD pipeline and rigorous unit testing. These elements contribute to a seamless and reliable gameplay experience, ensuring that players can fully engage with the interactive elements of the game without disruptions. It is build specifically for the Hololens 2 using UWP (a subset of .NET core) </p>
                <p>The overarching goal of "Chipz" is to deliver an exciting and memorable first-person shooter experience within the realm of mixed reality on the Hololens 2 platform. We worked with a team at Microsoft to develop the game and were shortlisted for the Student Industry Awards. </p>
                
                <a href="https://github.com/stevethomas13/calculator"><p><b>Vue.js Calculator: "CalcVue"</b></p></a>
                <p>Another project in my portfolio is "CalcVue," a modern calculator built using Vue.js. The goal was to create a sleek and user-friendly calculator application that takes advantage of Vue.js's reactive and component-based architecture.</p>
                <p>"CalcVue" offers a responsive and dynamic user interface, with real-time updates as users input calculations. The Vue.js framework allows for efficient state management, making the calculator highly responsive and providing a seamless user experience. The project also incorporates custom styling for a visually appealing design.</p>
                <p>Vue.js's two-way data binding and component reusability were instrumental in creating a well-structured and maintainable codebase. The calculator supports standard arithmetic operations as well as more advanced functions, making it a versatile tool for various mathematical tasks.</p>

                <a href="https://github.com/stevethomas13/BicepCurlFormDetector"><p><b>Bicep Curl Form Detector: "FormFit Tracker"</b></p></a>
                <p>For fitness enthusiasts, I developed a "FormFit Tracker," a bicep curl form detector using MediaPipe and OpenCV. This project aims to assist users in maintaining proper form during bicep curl exercises, reducing the risk of injuries and ensuring an effective workout.</p>
                <p>The system utilizes the power of MediaPipe for pose detection and OpenCV for image processing. By analyzing the user's body movements and posture in real-time, the FormFit Tracker provides immediate feedback on the quality of bicep curl form. Visual cues and real-time corrections are displayed to guide users in maintaining the correct posture and movement throughout the exercise.</p>
                <p>The integration of machine learning and computer vision technologies in fitness applications showcases the potential for technology to enhance physical training and promote safer workout practices. The FormFit Tracker is not only a demonstration of technical skills but also a practical tool for improving fitness routines.</p>

            </Col>
        </Row>

        

    </Container>
        </div>

    );
}
import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

export default function About() {
    return (
        <div id="experience">
            <Container fluid style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 classname="display-1">Experience</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <p><b>Supply Chain Project Manager, Intern @ Musgrave Group</b></p>
                        <p>
                        In my role as a Supply Chain Project Manager at Musgrave, I led a transformative initiative at the CDC Blanchardstown depot, implementing Six Sigma methodologies and developing standardized operating procedures to revamp the Recoup Process. Working with a diverse team, I facilitated cross-functional collaboration, harnessing various technical backgrounds to address inefficiencies. This concerted effort resulted in a remarkable surge in recoup rates from 35% to 83%, leading to substantial annual savings of almost half a million. The successful execution of the project underscored my ability to excel under budget constraints and tight deadlines, showcasing a holistic approach to supply chain optimization.
                        </p>
                        <p><b>Labratory Demonstrator @ Trinity College, Dublin</b></p>
                        <p>
                        In my capacity as a lab demonstrator for the Systems Programming module, I played a hands-on role in guiding students through the nuances of C++ and the practical implementation of advanced data structures. The module delved into intricate topics like hash tables and bloom filters, challenging students to apply theoretical concepts to real-world scenarios. I facilitated the learning process by addressing student queries, conducting interactive discussions, and offering in-depth explanations during lab sessions. Whether troubleshooting coding challenges or explaining the intricacies of memory management in C++, I ensured that students gained a comprehensive understanding of the subject matter.
                        </p>
                        <p><b>Business Team @ Formula Trinity</b></p>
                        <p>
                        During my tenure at Formula Trinity, my role centered on financial management and strategic sponsorships, providing me with a unique opportunity to refine my skills in budgeting, financial planning, and relationship building. This involved meticulous planning to allocate resources efficiently, ensuring that every aspect of the team's operations, from vehicle maintenance to race participation, was financially viable. A significant aspect of my responsibilities involved actively reaching out to suppliers, motor sports enthusiasts, and Trinity alumni to secure crucial funding for our initiatives. This outreach required a combination of effective communication, negotiation, and a thorough understanding of our financial needs. 
                        </p>
                        <p><b>Junior Consultant @ ISCG for ProtexAI</b></p>
                        <p>
                        In my capacity as a junior consultant with the Irish Student Consulting Group, I had the privilege of collaborating with ProtexAI, a company focused on enhancing its online visibility and expanding market reach. Our primary objective was to formulate and implement effective SEO strategies to optimize ProtexAI's digital presence. As part of this initiative, my team and I conducted a thorough review of pertinent data from various sources, including the Bureau of Labor and the Occupational Safety and Health Administration (OSHA). This comprehensive data analysis allowed us to identify industry-specific trends, competitor landscapes, and key keywords relevant to ProtexAI's offerings. Leveraging this information, we devised a tailored SEO strategy aimed at enhancing the company's search engine rankings and overall online visibility. 
                        </p>
                    </Col>
                </Row>

                

            </Container>

        </div>
    );
};


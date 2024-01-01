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
                <h1 classname="display-1">Welcome!</h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla metus nec urna pulvinar, eget laoreet nibh tincidunt. Vestibulum id turpis nec urna pharetra consectetur. Nulla facilisi. Maecenas sit amet nisi vel quam tincidunt luctus a ac mauris. Sed vel nibh nec sem cursus blandit. Fusce in arcu vitae odio dapibus vehicula ac at leo. Pellentesque in ipsum id orci tincidunt auctor non in turpis. Integer pharetra dolor ac tortor venenatis blandit. Curabitur tincidunt sagittis neque, at ultricies odio aliquam non. Integer auctor mauris vel risus fringilla, ac mattis urna feugiat.</p>

            <p>Duis vitae fermentum orci. Nulla facilisi. Sed in elit id turpis scelerisque blandit eu nec nulla. Fusce vehicula turpis vel ante lacinia, eu hendrerit quam fermentum. Proin sit amet ipsum vel mi consectetur bibendum at vel lectus. Ut vel magna vel nisi consequat scelerisque non eget arcu. Suspendisse potenti. Integer feugiat eros vel erat commodo, eu varius elit malesuada. Vivamus in tristique turpis. Integer at dolor eget orci vestibulum ullamcorper vel non lectus. In hac habitasse platea dictumst. Nunc auctor dapibus nisi, ac suscipit justo eleifend nec. Vivamus imperdiet vestibulum libero, a ultricies eros vulputate at. Nullam vel arcu sed dolor tincidunt facilisis nec et erat. Curabitur fringilla felis ac finibus varius.</p>

            <p>Suspendisse potenti. Duis nec scelerisque ligula, at pellentesque turpis. Nam interdum, velit ac bibendum malesuada, nunc elit rhoncus mi, ac accumsan quam dui vel eros. Sed ut justo id ipsum dapibus cursus ac vel lectus. Vivamus euismod euismod augue, ac aliquet justo ultricies a. Proin scelerisque libero et suscipit pharetra. Integer vel massa at turpis cursus feugiat. Suspendisse potenti. Etiam quis neque nec justo suscipit bibendum.</p>

            <p>Phasellus fermentum odio et quam rhoncus, eget auctor libero euismod. Quisque vitae consequat sapien. Sed bibendum nisl vitae odio condimentum, vel efficitur sem tincidunt. Aliquam sed lacus nec justo tristique euismod. Morbi eget tristique elit. Nulla facilisi. Fusce interdum ligula vel risus cursus, id sollicitudin elit vestibulum. Integer id dapibus lacus. Vivamus accumsan, risus at euismod vulputate, dolor neque hendrerit sapien, vitae efficitur velit lectus id lacus. Etiam rhoncus enim et odio fermentum, eu bibendum purus condimentum. Integer elementum, orci eu tincidunt fermentum, est felis dapibus orci, ut commodo quam arcu eu mauris. Nullam accumsan nunc ut leo consectetur, vitae fringilla velit accumsan.</p>
            </Col>
        </Row>

        

    </Container>
        </div>

    );
}
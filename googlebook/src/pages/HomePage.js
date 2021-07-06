import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function HomePage(){
    return (
        <Container>
            <Row className="text-center">
                <Col style={{backgroundColor:"rbga(0, 128, 0)"}}>
                    <h1 style={{marginBottom: "20px"}}>Let's search for some books! 🤓 📚</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage;
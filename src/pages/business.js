import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import { Link } from "gatsby";
import businessImg1 from "../images/business-description1.jpg";
import businessImg2 from "../images/business-description2.jpg";
import businessImg3 from "../images/business-description3.jpg";

const BusinessPage = () => (
    <Layout>
        <SEO title="Business" />
        <Row>
            <Col className="space"></Col>
        </Row>

        <Row>
            <Col className="title-obi">
                <h1 className="h1-font">事業内容</h1>
            </Col>
        </Row>

        <Row>
            <Col className="space"></Col>
        </Row>

        <Row>
            <Col md={6}>
                <Card style={{ marginTop:`1rem` }}>
                    <Card.Img variant="top" src={businessImg1} />
                    <Card.Body>
                        <Card.Title>事業内容 1</Card.Title>
                        <Card.Text>
                            事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6}>
                <Card style={{ marginTop:`1rem` }}>
                    <Card.Img variant="top" src={businessImg2} />
                    <Card.Body>
                        <Card.Title>事業内容 2</Card.Title>
                        <Card.Text>
                            事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6}>
                <Card style={{ marginTop:`1rem` }}>
                    <Card.Img variant="top" src={businessImg3} />
                    <Card.Body>
                        <Card.Title>事業内容 3</Card.Title>
                        <Card.Text>
                            事業内容3の内容。事業内容3の内容。事業内容3の内容。事業内容3の内容。事業内容3の内容。事業内容3の内容。
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col className="space"></Col>
        </Row>


    </Layout>
);

export default BusinessPage;

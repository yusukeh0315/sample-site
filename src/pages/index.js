import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import { Link } from "gatsby";
import homeImg from "../images/home.jpg";
import businessImg1 from "../images/business-description1.jpg";
import businessImg2 from "../images/business-description2.jpg";
import businessImg3 from "../images/business-description3.jpg";

const IndexPage = () => (
<Layout>
    <SEO title="Home" />
    <Row style={{ maxWidth:`960px` }}>
        <img src={ homeImg } style={{ width:`100%`, marginBottom:`2rem` }} />
    </Row>
    <Row>
        <Col xs={12} md={6} style={{ maxWidth:`480px` }} >
            <Row>
                <Col style={{ backgroundColor:`cornflowerblue`, color:`white`, padding:`0.5rem` }} >インフォメーション</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >インフォメーション 1</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >インフォメーション 2</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >インフォメーション 3</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >インフォメーション 4</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >インフォメーション 5</Col>
            </Row>
        </Col>
        <Col xs={12} md={6} style={{ maxWidth:`480px` }} >
            <Row>
                <Col style={{ backgroundColor:`cornflowerblue`, color:`white`, padding:`0.5rem` }} >IR情報</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >IR情報</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >社長ブログ</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >広告スペース</Col>
            </Row>
            <Row>
                <Col style={{ padding:`0.5rem` }} >広告スペース</Col>
            </Row>
        </Col>
    </Row>
    <Row>
        <Col style={{ backgroundColor:`cornflowerblue`, color:`white`, padding:`0.5rem`, maxWidth:`960px`, marginTop:`2rem` }} >事業内容</Col>
    </Row>
    <Row>
        <Col style={{ maxWidth:`960px` }}>
            <Row>
                <Col md={4}>
                    <Card style={{marginTop:`1rem`}} >
                        <Card.Img variant="top" src={businessImg1} />
                        <Card.Body>
                            <Card.Title>事業内容 1</Card.Title>
                            <Card.Text>
                                事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。事業内容1の内容。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{marginTop:`1rem`}} >
                        <Card.Img variant="top" src={businessImg2} />
                        <Card.Body>
                            <Card.Title>事業内容 2</Card.Title>
                            <Card.Text>
                                事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。事業内容2の内容。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{marginTop:`1rem`}} >
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
        </Col>
    </Row>
    <Row>
        <Col style={{ maxWidth:`960px`, paddingTop:`3rem` }}></Col>
    </Row>

  </Layout>
);

export default IndexPage;

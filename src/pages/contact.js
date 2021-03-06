import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import { Link } from "gatsby";


const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Row>
            <Col className="space"></Col>
        </Row>

        <Row>
            <Col className="title-obi">
                <h1 className="h1-font">お問い合わせ</h1>
            </Col>
        </Row>

        <Row>
            <Col className="space"></Col>
        </Row>

        <Container className="" style={{ width:`80%` }}>

            <Row>
                <Col>
                    <Form method="post" 
                        action="https://www.flexyform.com/f/6b68836a9cdc6e7f2a5f1f7d39e6b4ac8ba8c6cd"
                        enctype="multipart/form-data">
                        <Form.Control type="text" as="input" style={{visibility:`hidden`}} name="_empty_field" />

                        <Form.Group controlId="formBasicText">
                            <Form.Control type="text" as="input" placeholder="お名前" name="name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" as="input" placeholder="メールアドレス" name="email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicTextarea">
                            <Form.Control type="email" as="textarea" placeholder="メッセージ" rows="3" name="message" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="FormControlFile" name="file" lang="ja" label="ファイル添付" />
                        </Form.Group>

                        <Button variant="light" type="submit">
                            送信
                        </Button>
                    </Form>
                
                </Col>
            </Row>

        </Container>

        <Row>
            <Col className="space"></Col>
        </Row>


    </Layout>
);

export default ContactPage;

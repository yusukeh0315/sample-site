import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    
    <Row>
        <Col className="space"></Col>
    </Row>

    <Row>
        <Col className="title-obi">
            <h1 className="h1-font">会社概要</h1>
        </Col>
    </Row>

    <Row>
        <Col className="space"></Col>
    </Row>

    <Row>
        <Col>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>社名</td>
                        <td>ヤー・スペーステクノロジー</td>
                    </tr>

                    <tr>
                        <td>本社</td>
                        <td>東京都港区〇〇〇</td>
                    </tr>

                    <tr>
                        <td>設立</td>
                        <td>2021年1月4日</td>
                    </tr>

                    <tr>
                        <td>資本金</td>
                        <td>10,000,000円</td>
                    </tr>

                    <tr>
                        <td>代表者</td>
                        <td>山田　太郎</td>
                    </tr>

                </tbody>
            </Table>
        </Col>
    </Row>
    
    <Row>
        <Col className="space"></Col>
    </Row>

  </Layout>
);

export default AboutPage;

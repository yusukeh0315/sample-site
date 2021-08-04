import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import homeImg from "../images/home.jpg";
import businessImg1 from "../images/business-description1.jpg";
import businessImg2 from "../images/business-description2.jpg";
import businessImg3 from "../images/business-description3.jpg";

const IndexPage = ({ data }) => (
<Layout>
    <SEO title="Home" />
    <Row style={{ maxWidth:`960px` }}>
        <img src={ homeImg } style={{ width:`100%`, marginBottom:`2rem` }} alt="" />
    </Row>
    <Row>
        <Col xs={12} md={6} style={{ maxWidth:`480px` }} >
            <Row>
                <Col style={{ backgroundColor:`cornflowerblue`, color:`white`, padding:`0.5rem` }} >インフォメーション</Col>
            </Row>

            {data.allMarkdownRemark.edges.map(({node})=>(
                <Row>
                <Col style={{ padding:`0.5rem` }} >
                    <Link to={`${node.fields.slug}`} >
                        {node.frontmatter.date} 記事 {`   `} {node.frontmatter.title}
                    </Link>
                </Col>
                </Row>
            ))}

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
                        <Card.Img variant="top" src={businessImg1} alt="" />
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
                        <Card.Img variant="top" src={businessImg2} alt="" />
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
                        <Card.Img variant="top" src={businessImg3} alt="" />
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

export const query = graphql
`
query {
    allMarkdownRemark(
        limit:4, sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node{
                    excerpt(pruneLength: 50, truncate:true)
                    frontmatter {
                        title
                        date(formatString: "YYYY/MM/DD")
                    }
                    fields {
                        slug
                    }
                }
            }
    }
}
`
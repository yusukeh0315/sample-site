import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
    <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand as={Link} href="/">
        {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <NavItem href="/about">
            <Nav.Link as={Link} activeClassName="active" to="/about">
                会社概要
            </Nav.Link>
            </NavItem>
            <NavItem href="/about">
            <Nav.Link as={Link} activeClassName="active" to="/business">
                事業内容
            </Nav.Link>
            </NavItem>
            <NavItem href="/about">
            <Nav.Link as={Link} activeClassName="active" to="/about">
                インフォメーション
            </Nav.Link>
            </NavItem>
            <NavItem href="/about">
            <Nav.Link as={Link} activeClassName="active" to="/contact">
                お問い合わせ
            </Nav.Link>
            </NavItem>

        </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;

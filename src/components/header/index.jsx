import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Row } from 'react-materialize';

export default function Header() {
    return (
        <Row>
            <Navbar className="#880e4f pink darken-4" id="mobile-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </Navbar>
        </Row>
    );
}

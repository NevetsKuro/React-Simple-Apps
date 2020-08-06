import React from 'react';
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Clock Timer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Music Finder</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">????</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">????</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Header;
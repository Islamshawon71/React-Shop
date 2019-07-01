import React from 'react';  
import  {Nav} from 'react-bootstrap'

function NavBar() {
  return (
    <Nav activeKey="/">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/shop">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default NavBar;

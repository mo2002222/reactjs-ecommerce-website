import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import Home from './Home';
// import Shop from '../shop/Shop';

function Header() {
    const [bg, setBg] = useState();
    const handelScroll = () => {
        if (window.scrollY > 0) {
        setBg("rgb(246 246 246 / 74%)");
        } else {
        setBg("transparent");
        }
    };
    window.addEventListener("scroll", handelScroll);

    return (
        <div className="fixed-top" style={{ background: `${bg}` }}>
        <Navbar
            expand="lg"
            style={{ borderBottom: "3px solid rgb(228 228 228 / 36%)" }}
        >
            <Container>
            <Navbar.Brand href="#">
                <img
                src="/src\assets\images\logo\logo.png"
                width="130"
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
                />
                {/* <h4 className='d-inline-block aligh-top fw-bold pt-3 ' style={{color:"#FFB300"}}>SHOP<span style={{color:'#1A237E'}}>Cart</span></h4> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto align-items-lg-center align-items-start">
                {/* <LinkContainer to="/"> */}
                <Nav.Link className="nav-link px-3 fw-bold">
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                    Home
                    </Link>
                </Nav.Link>
                {/* </LinkContainer> */}
                {/* <LinkContainer to="/shop"> */}
                <Nav.Link className="nav-link px-3 fw-bold">
                    <Link to={"/Shop"}>Shop</Link>
                </Nav.Link>
                {/* </LinkContainer> */}
                {/* <LinkContainer to="/blog"> */}
                <Nav.Link className="nav-link px-3 fw-bold">
                    <Link to={"/Blog"}>Blog</Link>
                </Nav.Link>
                {/* </LinkContainer> */}
                {/* <LinkContainer to="/about"> */}
                <Nav.Link className="nav-link px-3 fw-bold">
                    <Link to={"/AboutUs"}>About</Link>
                </Nav.Link>
                {/* </LinkContainer> */}
                {/* <LinkContainer to="/contact"> */}
                <Nav.Link className=" me-4 nav-link px-3 fw-bold ">
                    <Link to={"/Contact"}>Contact</Link>
                </Nav.Link>
                {/* </LinkContainer> */}
                <Link to={"/Register"} style={{ textDecoration: "none" }}>
                    <Button variant="warning" className="ml-2">
                    Create Account
                    </Button>
                </Link>
                <Link
                    to={"/Login"}
                    variant="outline-light"
                    className="ml-2 text-black ms-lg-2 p-lg-0 pt-lg-0 p-3 pt-1 fw-medium"
                    style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textDecoration: "none",
                    }}
                >
                    Log In
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default Header;

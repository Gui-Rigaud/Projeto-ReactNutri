
//import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.png';
import '../../style.css';

function Header() {
    return (
        <header>
            <Navbar className="color-nav" variant="light">
                <Link to="/"><img src={logo} alt="logo" id="logo" className="img-fluid rounded-circle"></img></Link>
                <Navbar.Brand href="/" className="title-princ">React Nutri</Navbar.Brand>
                <Nav className="me-auto">
                    <div class="home-area"><Nav.Link href="/"><i class="fa fa-fw fa-home"></i> Home</Nav.Link></div>
                    <div class="about-area"><Nav.Link href="/sobre"><i class="fa fa-info-circle" aria-hidden="true"></i> Sobre</Nav.Link></div>
                    <div class="contact-area"><Nav.Link href="/contato"><i class="fa fa-envelope" aria-hidden="true"></i> Contato</Nav.Link></div>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;
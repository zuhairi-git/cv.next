import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/cvlanes-white.png'
import DropDown from './DropDown';

function ResponsiveNavbar() {
  return (
    <Navbar sticky="top" className="navbar nav navbar-expand-lg blur" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} style={{ width: '50px' }} alt='Image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="nav-item nav-link active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#team" className='hidden-xxs hidden-xs hidden-sm'>Social Media</Nav.Link>
            <Nav.Link href="#teammobile" className='hidden-md hidden-lg hidden-xl hidden-xxl'>Social Media</Nav.Link>
            <Nav.Link href="#review">Recommendations</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <DropDown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
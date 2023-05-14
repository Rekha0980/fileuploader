import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (

    <Navbar  variant="warning"  expand="lg"   
    // style={{
    // height:'100vh',
    // width:"100vw",
    // backgroundImage:
    //     'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    // }}  
    >
      <Container >
        <Navbar.Brand href="#home" style={{color:"black",fontSize:"22px"}}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{background:"#f2bb07",padding:"2px",fontWeight:"bold",fontSize:"12px", borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}>
            <Nav.Link href="#home"  style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Services</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Case Study</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Blogs</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Pages</Nav.Link>
            <Nav.Link  style={{color:"white"}}>Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default BasicExample;

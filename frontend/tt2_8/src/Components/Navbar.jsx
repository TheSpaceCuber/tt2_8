import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DBSlogo from '../assets/images/DBSlogo.png';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={DBSlogo} height={47}/>MyDBS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#ViewPolicy">View Policy</Nav.Link>
                <Nav.Link href="#ViewClaim">View Claim</Nav.Link>
                <Nav.Link href="#Create Claim">Create Claim</Nav.Link>
                <Nav.Link href="#Profile"><ContactPageIcon/>My Profile</Nav.Link>
            </Nav>       
            
            <Navbar.Toggle />

            <Navbar.Text>
                Signed in as: <a href="#login">MyName</a>
            </Navbar.Text>

            <Form>
            <Button>Log Out</Button>
            </Form>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
import Button from 'react-bootstrap/Button';
import Navbar from '../Components/Navbar.jsx';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';



  function ViewPolicy() {
    return (
      <div>
      <Navbar></Navbar>
        <Container>
      <Row className='mt-3'>
      <h2>Your Policies</h2>
      </Row>       
      <Row>
      <Col lg="3">
        <Card>
        <Card.Body>
          <Card.Title><TextSnippetIcon/> Policy ID</Card.Title>    
          <Card.Text>
            Policy details here
          </Card.Text>
          <Card.Link href="#">Make Claims</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      </div>
    );
  }
  
  export default ViewPolicy;
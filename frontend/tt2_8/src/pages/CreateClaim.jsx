import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from "../Components/Navbar";
import InputGroup from 'react-bootstrap/InputGroup';

function CreateClaim() {
    return (

        <div>
            <Navbar></Navbar>
        <Container>
            <Row className='mt-3'>
            
            <h2>Create New Claim</h2>
            </Row>       
        <Row>
        <Card>
            <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formReceiptNumber">
          <Form.Label>Receipt Number</Form.Label>
          <Form.Control type="text" placeholder="Receipt Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Invoice Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>

        <InputGroup className="mb-3">

        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control type='number' min={0.01} step={0.01} placeholder={"0.00"} aria-label="Amount (to the nearest dollar)" />
        </InputGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Purpose of Expenditure</Form.Label>
          <Form.Control type="text"  placeholder='Purpose'/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
          <Form.Check type="checkbox" label="Add as Follow Up Claim" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
      </Row>
      </Container>
      </div>

    );
  }
  
  export default CreateClaim;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from "../Components/Navbar";
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';







function CreateClaim() {


    const [check, setCheck] = useState(false);

    function Checkbox(){
        if (check == true){
            setCheck(false)
        }else{
            setCheck(true)
        }

    
    }



    return (

        <div>
        <Container>
            <Row className='mt-3'>
            <h2>Create New Claim</h2>
            </Row>       
        <Row>
        <Card>
            <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formReceiptNumber">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" disabled/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReceiptNumber">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" disabled/>
        </Form.Group>
    {/* 
            <Form.Floating className="mb-3">
            <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="name@example.com" disabled
            />
            <label htmlFor="floatingInputCustom">First Name</label>
        </Form.Floating> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Policy Number</Form.Label>
        <Form.Select aria-label="Default select example">
       <option>Select a Policy to Make a Claim</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
     </Form.Select>
     </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formReceiptNumber">
          <Form.Label>Receipt Number</Form.Label>
          <Form.Control type="text" placeholder="Receipt Number" />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Invoice Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>


        <Form.Label>Amount</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control type='number' min={0.01} step={0.01} placeholder={"0.00"} aria-label="Amount (to the nearest dollar)" />
        </InputGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Purpose of Expenditure</Form.Label>
          <Form.Control type="text"  placeholder='Purpose'/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
          <Form.Check onChange={Checkbox} type="checkbox" label="Add as Follow Up Claim" />
        </Form.Group>

        {check &&
       <Form.Select aria-label="Default select example">
       <option>Select a Claim ID</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
     </Form.Select>
        }
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
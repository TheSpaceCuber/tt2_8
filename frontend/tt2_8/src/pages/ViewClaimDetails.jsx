import Button from 'react-bootstrap/Button';
import Navbar from "../Components/Navbar";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

function ViewClaimDetails() {

  const [check, setCheck] = useState(true);

  function EditClaim(){
      if (check == true){
          setCheck(false);

      }
  } 

    return (
      <div>
        <Container>
        <Row><h2>Claim Details</h2></Row>
        <Row>
        <Card>
            <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Invoice Date</Form.Label>
          <Form.Control type="date" disabled={check}/>
        </Form.Group>

        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control type='number' placeholder={"295.04"} aria-label="Amount (to the nearest dollar)" disabled={check}/>
        </InputGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Purpose of Expenditure</Form.Label>
          <Form.Control type="text"  placeholder='Purpose' disabled={check}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Follow Up Claim " disabled={check}/>
          <Form.Control type="text"  placeholder='Claim ID' disabled={check}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Claim Status </Form.Label>
          <Form.Control type="text"  placeholder='Pending/Approved/Rejected' disabled={check}/>
        </Form.Group>
        <Button variant='danger'>Delete Claim</Button> <Button id="EditBtn" onClick={EditClaim} style={{display: check ? 'inline' : 'none' }}>Edit Claim</Button>  <Button id="SaveBtn" style={{display: check ? 'none' : 'inline' }}>Save</Button>
      </Form>
      
      </Card.Body>
      </Card>
      </Row>
        </Container>
      </div>
    );
  }

  export default ViewClaimDetails;
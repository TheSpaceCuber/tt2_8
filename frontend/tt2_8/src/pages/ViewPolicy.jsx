import Button from "react-bootstrap/Button";
import Navbar from "../Components/Navbar.jsx";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.js";

const data2 = [
  {
    InsuranceID: 1005,
    EmployeeID: 58001002,
    InsuranceType: "Personal Accident",
    PolicyStartDate: "2022-03-31T00:00:00+08:00",
    PolicyTerm: "12 months",
    PolicyEndDate: "2023-03-31T00:00:00+08:00",
    ClaimLimit: 1000.0,
    RemainingClaimLimit: 400.0,
  },
  {
    InsuranceID: 1006,
    EmployeeID: 58001002,
    InsuranceType: "Housing",
    PolicyStartDate: "2022-03-31T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2024-03-31T00:00:00+08:00",
    ClaimLimit: 50000.0,
    RemainingClaimLimit: 50000.0,
  },
  {
    InsuranceID: 1007,
    EmployeeID: 58001002,
    InsuranceType: "Car",
    PolicyStartDate: "2022-03-31T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2024-03-31T00:00:00+08:00",
    ClaimLimit: 25000.0,
    RemainingClaimLimit: 20000.0,
  },
  {
    InsuranceID: 1008,
    EmployeeID: 58001003,
    InsuranceType: "Personal Accident",
    PolicyStartDate: "2022-05-31T00:00:00+08:00",
    PolicyTerm: "3 months",
    PolicyEndDate: "2022-08-31T00:00:00+08:00",
    ClaimLimit: 1000.0,
    RemainingClaimLimit: 800.0,
  },
  {
    InsuranceID: 1009,
    EmployeeID: 58001004,
    InsuranceType: "Personal Accident",
    PolicyStartDate: "2022-05-31T00:00:00+08:00",
    PolicyTerm: "12 months",
    PolicyEndDate: "2023-05-31T00:00:00+08:00",
    ClaimLimit: 5000,
    RemainingClaimLimit: 4600,
  },
  {
    InsuranceID: 1010,
    EmployeeID: 58001004,
    InsuranceType: "Housing",
    PolicyStartDate: "2022-05-31T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2024-05-31T00:00:00+08:00",
    ClaimLimit: 50000.0,
    RemainingClaimLimit: 50000.0,
  },
  {
    InsuranceID: 1011,
    EmployeeID: 58001003,
    InsuranceType: "Car",
    PolicyStartDate: "2022-07-31T00:00:00+08:00",
    PolicyTerm: "12 months",
    PolicyEndDate: "2023-07-31T00:00:00+08:00",
    ClaimLimit: 25000.0,
    RemainingClaimLimit: 25000.0,
  },
  {
    InsuranceID: 1012,
    EmployeeID: 58001004,
    InsuranceType: "Car",
    PolicyStartDate: "2022-09-30T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2024-09-30T00:00:00+08:00",
    ClaimLimit: 25000.0,
    RemainingClaimLimit: 25000.0,
  },
  {
    InsuranceID: 1013,
    EmployeeID: 58001001,
    InsuranceType: "Housing",
    PolicyStartDate: "2022-11-30T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2024-11-30T00:00:00+08:00",
    ClaimLimit: 50000.0,
    RemainingClaimLimit: 50000.0,
  },
  {
    InsuranceID: 1014,
    EmployeeID: 58001005,
    InsuranceType: "Travel",
    PolicyStartDate: "2023-01-31T00:00:00+08:00",
    PolicyTerm: "1 month",
    PolicyEndDate: "2023-02-28T00:00:00+08:00",
    ClaimLimit: 1000.0,
    RemainingClaimLimit: 1000.0,
  },
  {
    InsuranceID: 1015,
    EmployeeID: 58001005,
    InsuranceType: "Housing",
    PolicyStartDate: "2023-01-31T00:00:00+08:00",
    PolicyTerm: "24 months",
    PolicyEndDate: "2025-01-31T00:00:00+08:00",
    ClaimLimit: 50000.0,
    RemainingClaimLimit: 50000.0,
  },
  {
    InsuranceID: 1016,
    EmployeeID: 58001001,
    InsuranceType: "Travel",
    PolicyStartDate: "2023-01-31T00:00:00+08:00",
    PolicyTerm: "1 month",
    PolicyEndDate: "2023-02-28T00:00:00+08:00",
    ClaimLimit: 1000.0,
    RemainingClaimLimit: 900.0,
  },
];

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

function ViewPolicy() {
  const { auth } = useAuth();
  const [resData, setResData] = useState([]);
  useEffect(
    (auth) => {
      let response;
      try {
        response = axios.get(`/policy/${auth.employeeID}`);
        setResData(response);
      } catch (err) {
        setResData(data2);
      }
    },
    [auth]
  );

  const listItems = resData.map((data) => (
    <Col lg="4" className="mb-3">
      <Card>
        {" "}
        <Card.Body>
          <Card.Title>
            <TextSnippetIcon />
            {data.InsuranceID}
          </Card.Title>
          <Card.Text>
            Policy details here<br></br>
            <strong>Insurance Type:</strong> {data.InsuranceType}
          </Card.Text>
          <Link to="/create_claim">
            <Card.Link href="#">Make Claims</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <h2>Your Policies</h2>
        </Row>
        <Row>{listItems}</Row>
      </Container>
    </div>
  );
}

export default ViewPolicy;

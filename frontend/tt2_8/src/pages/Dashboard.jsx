import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Dashboard() {
  return (
    <Container>
          <Row className='mt-3'>
    <h2>My Dashboard</h2>
    </Row>  
    <Row>
    <Col><Card><Card.Body>
        <Link
          to="/view_claims"
          >
          <h4>View Claims <ManageSearchIcon/></h4>
        </Link>
        </Card.Body></Card>
    </Col>
    <Col>
        <Card> <Card.Body>
        <Link
          to="/view_policies"
          >
          <h4>View Policies <TextSnippetIcon/></h4>
        </Link>
        </Card.Body></Card>
    </Col>
    <Col>
        <Card> <Card.Body>
        <Link
          to="/create_claim"
          >
          <h4>Create Claims <ReceiptLongIcon/></h4>
        </Link>
        </Card.Body></Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Dashboard;

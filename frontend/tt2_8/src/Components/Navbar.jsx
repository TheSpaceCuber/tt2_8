import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DBSlogo from "../assets/images/DBSlogo.png";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import useLogout from "../hooks/useLogout";

function MyNavbar() {
  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={DBSlogo} height={47} />
          MyDBS
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/dashboard" className="text-decoration-none text-light">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/view_policies"
                className="text-decoration-none text-light"
              >
                View Policy
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/view_claims"
                className="text-decoration-none text-light"
              >
                View Claim
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/create_claim"
                className="text-decoration-none text-light"
              >
                Create Claim
              </Link>
            </Nav.Link>
          </Nav>

          <Navbar.Toggle />

          <Navbar.Text className="px-1">
            Signed in as:{" "}
            <a className="text-white text-decoration-none">MyName</a>
          </Navbar.Text>

          <Form>
            <Button className="btn btn-sm btn-danger" onClick={signOut}>
              Log Out
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

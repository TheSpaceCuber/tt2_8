import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ViewClaims() {
    return (
      <div>

        <Button>View Claimm</Button>
        <Link to="/view_claim_details">Details</Link>
      </div>
    );
  }
  
  export default ViewClaims;
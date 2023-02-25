import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container-fluid vh-100">
      <div className="row d-flex justify-space-between py-2">
        <Link
          to="/view_claims"
          className="col-2 offset-1 border rounded d-flex flex-column justify-content-center align-items-center text-decoration-none text-dark"
        >
          <p className="p-1 m-0">10</p>
          <p className="p-1 m-0">view claims</p>
        </Link>
        <Link
          to="/view_policies"
          className="col-2 offset-2 border rounded d-flex flex-column justify-content-center align-items-center text-decoration-none text-dark"
        >
          <p className="p-1 m-0">15</p>
          <p className="p-1 m-0">view policies</p>
        </Link>
        <Link
          to="/create_claim"
          className="col-2 offset-2 border rounded d-flex flex-column justify-content-center align-items-center text-decoration-none text-dark"
        >
          <p className="p-1 m-0">20</p>
          <p className="p-1 m-0">create claims</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateClaim from "./pages/CreateClaim";
import ViewClaimDetails from "./pages/ViewClaimDetails";
import ViewClaims from "./pages/ViewClaims";
import ViewPolicy from "./pages/ViewPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/create_claim" element={<CreateClaim />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view_claim_details" element={<ViewClaimDetails />} />
        <Route path="/view_claims" element={<ViewClaims />} />
        <Route path="/view_policies" element={<ViewPolicy />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;

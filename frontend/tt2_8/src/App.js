import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ViewPolicy from "./pages/ViewPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ViewPolicy />} />
        <Route path="/" element={<ViewPolicy />} />
        <Route path="/" element={<ViewPolicy />} />
        <Route path="/" element={<ViewPolicy />} />
        <Route path="/" element={<ViewPolicy />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import DenseAppBar from "./components/AppBar";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

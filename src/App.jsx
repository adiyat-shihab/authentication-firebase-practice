import "./App.css";
import { Navbar } from "./component/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className={"mt-6"}>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;

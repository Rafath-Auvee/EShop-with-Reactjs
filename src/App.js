// import './App.css';
import Header from "./component/header/Header";
import Shop from "./component/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Order from "./component/Order/Order";
import Inventory from "./component/Inventory/Inventory";
import About from "./component/About/About";
import Login from "./component/Login/Login";
import SignUp from "./component/Sign Up/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route>
          <Route path="/" element={<Shop />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

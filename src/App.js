// import './App.css';
import Header from "./component/header/Header";
import Shop from "./component/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Order from "./component/Order/Order";
import Inventory from "./component/Inventory/Inventory";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;

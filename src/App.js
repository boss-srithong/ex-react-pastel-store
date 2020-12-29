import React, {useState} from 'react';
import './assets/style.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProductPage from './pages/Product';
import CartPage from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <CartPage cart={cart} setCart={setCart}/>
          </Route>
          <Route path="/">
            <ProductPage cart={cart} setCart={setCart}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
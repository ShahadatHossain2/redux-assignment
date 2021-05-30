import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/checkout/:id">
            <Checkout></Checkout>
          </Route>
          <Route path="/productDetails/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

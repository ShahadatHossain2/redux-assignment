import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Shipment from './Components/Shipment/Shipment';

import { connect } from 'react-redux';
import Cart from './Components/Cart/Cart';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                    <Route
                        path="/productDetails/:id"
                        component={ProductDetails}
                    />
                    <Route path="/shipment" component={Shipment} />
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

export default connect(mapStateToProps)(App);

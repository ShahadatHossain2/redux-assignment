import React from 'react';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

// Redux
import { connect } from 'react-redux';

const Home = ({ products }) => {
    return (
        <div>
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {products.map((product) => (
                        <Products product={product}></Products>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Home);

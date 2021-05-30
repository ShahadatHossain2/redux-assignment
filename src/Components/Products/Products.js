import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import {
    loadCurrentItem,
    addToCart,
} from '../../redux/shopping/shoppingActions';

const Products = ({ product, addToCart, loadCurrentItem }) => {
    const imageStyle = {
        width: '300px',
        height: '300px',
    };

    return (
        <div className="col-md-6">
            <div className="row justify-content-center align-items-center p-3 mt-3 shadow rounded">
                <div className="col-lg-6">
                    <img style={imageStyle} src={product.image} alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="mt-5">
                        <h4>{product.name}</h4>
                        <strong>Price: ${product.price}</strong>
                    </div>
                    <div>
                        <Link
                            to={'/productDetails/' + product.id}
                            className="btn btn-primary m-2"
                        >
                            <button
                                onClick={() => loadCurrentItem(product)}
                                className="btn btn-primary"
                            >
                                View Details
                            </button>
                        </Link>

                        <button
                            onClick={() => addToCart(product.id)}
                            className="btn btn-primary m-2"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Products);

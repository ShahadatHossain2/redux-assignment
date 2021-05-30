import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/shopping/shoppingActions';

const ProductDetails = ({ current, addToCart }) => {
    return (
        <div>
            <div className="d-flex p-3 mt-3 shadow rounded">
                <div>
                    <img
                        style={{ width: '400px', height: '400px' }}
                        src={current.image}
                        alt=""
                    />
                </div>
                <div>
                    <div className="mt-5 pt-5">
                        <h4>{current.name}</h4>
                        <strong>Price: ${current.price}</strong>
                        <p>{current.description}</p>
                    </div>
                    <button
                        onClick={() => addToCart(current.id)}
                        style={{
                            color: 'white',
                            padding: '5px',
                            backgroundColor: 'green',
                            width: '120px',
                            textAlign: 'center',
                            fontSize: '20px',
                            borderRadius: '5px',
                        }}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

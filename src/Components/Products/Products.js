import React from 'react';
import { Link } from 'react-router-dom';
const Products = ({ product }) => {

    const imageStyle = {
        width: '300px',
        height: '300px'
    }

    return (
        <div className="col-md-6">
            <div className="d-flex p-3 mt-3 shadow rounded">
                <div>
                    <img style={imageStyle} src={product.image} alt="" />
                </div>
                <div>
                    <div className="mt-5">
                        <h4>{product.name}</h4>
                        <strong>Price: ${product.price}</strong>
                    </div>
                    <div>
                        <Link to={"/productDetails/"+ product.id} className="btn btn-primary m-2">View Details</Link>
                        <Link to={"/checkout/"+ product.id} className="btn btn-primary m-2">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
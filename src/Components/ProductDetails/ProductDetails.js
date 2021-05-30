import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import fakeData from '../../FakeData/FakeData.json';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productId = parseInt(id)
        const data = fakeData.find(product => product.id === productId);
        setProduct(data);
    }, [id])

    const history = useHistory();
    const handleClick = () => {
        history.push('/shipment');
    }

    return (
        <div>
            <div className="d-flex p-3 mt-3 shadow rounded">
                <div>
                    <img style={{width:'400px', height:'400px'}} src={product.image} alt="" />
                </div>
                <div>
                    <div className="mt-5 pt-5">
                        <h4>{product.name}</h4>
                        <strong>Price: ${product.price}</strong>
                        <p>{product.description}</p>
                    </div>
                    <button onClick={handleClick} style={{color: 'white', padding:'5px' ,backgroundColor:'green', width:'120px', textAlign:'center', fontSize:'20px', borderRadius:'5px'}}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../FakeData/FakeData.json';

const Checkout = () => {

    const {id} = useParams();
    const [cart, setCart] = useState({});
    
    useEffect(()=>{
        const productId = parseInt(id)
       const data = fakeData.find(product => product.id===productId);
       setCart(data);
    }, [id])

    return (
        <div className='container'>
             <h2 className="">Checkout</h2>
            <table className="table shadow rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cart.name}</td>
                        <td>1</td>
                        <td>${cart.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td>${cart.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td ><button style={{color: 'white', padding:'5px' ,backgroundColor:'green', width:'120px', textAlign:'center', fontSize:'20px', borderRadius:'5px'}}>Checkout</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import fakeData from '../../FakeData/FakeData.json'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        setProducts(fakeData)
    },[])
    console.log(products);
    return (
        <div>
            <div className="container">
            <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="row">
                {
                    products.map(product => <Products product={product}></Products>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;
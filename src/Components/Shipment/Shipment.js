import React from 'react';

const Shipment = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Shipment</h2>
            <form className="text-center mt-5">
                <input className="from-control w-50 m-2" type="text" name="" id=""  placeholder="Enter Your Name"/> <br />
                <input className="from-control w-50 m-2" type="text" name="" id=""  placeholder="Your Address"/> <br />
                <input className="from-control w-50 m-2" type="text" name="" id=""  placeholder="Phone Number"/> <br />
                <button className="btn btn-primary w-50">Confirm Order</button>
            </form>
        </div>
    );
};

export default Shipment;
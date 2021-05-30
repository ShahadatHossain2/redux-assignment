import React from 'react';

const Navbar = () => {
    return (
        <div>
<nav className="navbar rounded navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <div>
    <h3 className="navbar-brand" href="#">Gadget Shop</h3>
    </div>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h5 className="nav-link active" aria-current="page">Cart <span>0</span></h5>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
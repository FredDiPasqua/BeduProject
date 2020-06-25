import React from 'react';
import { Link } from 'react-router-dom';
import './styles/layoutHeader.css';

const LayoutHeader = props => {
    return(
        <nav sticky="top" className="navbar navbar-expands bg-danger">
            <Link style={{ textDecoration: 'none' }} to="/" >
                <div id="brandLogo" >
                    <img id="imgLogo" src="#" alt="Logo"/>
                    {/* <img id="imgBrand" src="" alt="Brand"/> */}
                    <h4 id="brand" >Brand</h4>
                </div>
            </Link>
        </nav>
    )
}

export default LayoutHeader;
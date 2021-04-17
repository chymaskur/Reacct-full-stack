// import React from 'react';
// import React, { useEffect, useState } from 'react';

// import { Container, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './Event.css';
const Event = ({ event }) => {
    const BuyProduct = id => {

    }
    
    return (
        <div className="container">
            <div className="grid-item">
                <img style={{ height: '100px' }} src={event.imageURL} alt="" />
                <h2>{event.name} <button onClick={() => BuyProduct(event._id)}>Buy Now</button></h2>
            </div>
        </div>
    );
};

export default Event;
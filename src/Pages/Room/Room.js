import React from 'react';

const Room = ({ room }) => {
    const { title, img, price, rating } = room;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="w-75" src={img} alt="" />
            <h5 className="text-warning">{title}</h5>
            <h6>Price:${price}</h6>
            <h6>Rating:{rating}</h6>
            
        </div>
    );
};

export default Room;
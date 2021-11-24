import React from 'react';

const Park = ({ park }) => {
    const { name, img } = park;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="w-50" src={img} alt="" />
            <h3 className="text-danger rounded-2">{name}</h3>
            
        </div>
    );
};

export default Park;
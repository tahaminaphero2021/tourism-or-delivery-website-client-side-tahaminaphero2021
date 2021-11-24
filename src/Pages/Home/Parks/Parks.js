import React from 'react';

import park1 from '../../../images/park/park1.jpg';
import park2 from '../../../images/park/park2.jpg';
import park3 from '../../../images/park/park3.jpg';

import Park from '../Park/Park';

const parks = [
    {
        img: park1,
        name: 'Disneyland Park',
        
    },
    {
        img: park2,
        name: 'Sky ranch tagaytay',
      
    },
    {
        img: park3,
        name: 'Caravan Park',
      
    },
    
]

const Parks = () => {
    return (
        <div id="parks" className="container">
            <h2 className="text-primary mt-5">Our Accommodation World</h2>
            <div className="row">
                {
                    parks.map(park=> <Park
                        key={park.name}
                        park={park}
                    >

                    </Park>)
                }
            </div>
        </div>
    );
};

export default Parks;
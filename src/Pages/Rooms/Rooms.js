import React from 'react';

import img1 from '../../images/room/room1.jpg';
import img2 from '../../images/room/room2.jpg';
import img3 from '../../images/room/room3.jpg';

import Room from '../Room/Room';

const rooms = [
    {
      title: "Light bright airy stylish apt & safe peaceful stay",
      img: img1,
      id: 1,
      title1: "4 guest 2 bedrooms 2 beds 2 baths",
      title2: "Wifi Air conditional Kitchen",
      title3: "Cancellation flexibility available",
      rating: "4.9(20)",
      price: "34",
  
    },
    {
      title: "Apartment in Lost Panorama",
      img: img2,
      id: 2,
      title1: "4 guest 2 bedrooms 2 beds 2 baths",
      title2: "Wifi Air conditional Kitchen",
      title3: "Cancellation flexibility available",
      rating: "4.8(10)",
      price: "52",
    },
    {
      title: "AR Lounge & Pool (r&r + b+B)",
      img: img3,
      id: 3,
      title1: "4 guest 2 bedrooms 2 beds 2 baths",
      title2: "Wifi Air conditional Kitchen",
      title3: "Cancellation flexibility available",
      rating: "4.9(25)",
      price: "44",
    },
  ];

const Rooms = () => {
    return (
        <div id="rooms" className="container">
            <h2 className="text-Primary mt-5">Fantastic Rooms</h2>
            <div className="row">
                {
                    rooms.map(room=> <Room
                        key={room.title}
                        room={room}
                    >

                    </Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;
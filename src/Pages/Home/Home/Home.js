import React from 'react';
import Rooms from '../../Rooms/Rooms';
import Banner from '../Banner/Banner';
import Parks from '../Parks/Parks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
           <Parks></Parks>
           <Rooms></Rooms>
        </div>
    );
};

export default Home;
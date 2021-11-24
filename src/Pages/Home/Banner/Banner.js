import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className=" w-50 display-center mt-3"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h6 className="text-white">Feel the freedom to travel</h6>
                        {/* <p className="text-primary">If you like to travel but you like even more the feeling of freedom, the solution is obvious: a caravan.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50 display-center mt-3"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-primary">Let's Travel</h3>
                        <p>World's largest travel platform. Browse hundreds of millions of traveler reviews and opinions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50 display-center mt-3"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h6 className="text-white">Look at the camera on smile face!</h6>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50 display-center mt-3"
                        src={banner4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h6 className="text-white">A Fanastic World!</h6>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
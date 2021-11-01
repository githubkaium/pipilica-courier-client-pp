import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img height={400}
                        className="d-block w-100"
                        src={"https://i.ibb.co/tbGtDD4/image-05.png"}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={400}
                        className="d-block w-100"
                        src={"https://i.ibb.co/VDxpK1d/image-04.png"}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={400}
                        className="d-block w-100"
                        src={"https://i.ibb.co/SVfJLdx/image-01.png"}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
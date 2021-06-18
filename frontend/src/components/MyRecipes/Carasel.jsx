import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { REACT_APP_UPLOADS_CAROUSEL } from '../../api_link'
import './MyRecipe.css'
export default function Carasel() {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={`${REACT_APP_UPLOADS_CAROUSEL}/slider-1.jpg`}
                        alt="First slide"
                    />
                </Carousel.Item>
{/* interval={1500} */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={`${REACT_APP_UPLOADS_CAROUSEL}/slider-2.jpg`}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={`${REACT_APP_UPLOADS_CAROUSEL}/slider-2.jpg`}
                        alt="Second slide"
                    />
                </Carousel.Item>
               
            </Carousel>
        </div>
    )
}

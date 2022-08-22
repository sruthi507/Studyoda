import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrowIcon from '../CoreUI/BlogIcons/LeftArrowIcon';
import RightArrowIcon from '../CoreUI/BlogIcons/RightArrowIcon';

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className="relative">
            {/* <div className="absolute right-683 -top-37"> */}
            <div className="absolute right-121 -top-1 md:right-303 lg:right-683 lg:-top-37 xl:right-675">
                <button
                    // className="bg-slate-100 w-9 h-9 rounded-full p-7 mt-12 shadow-xl relative  hover:bg-white hover:shadow-2xl"
                    onClick={onClick}
                >
                    <LeftArrowIcon />
                </button>
            </div>
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className="relative">
            {/* <div className="absolute left-600 top-525"> */}
            <div className="absolute top-497 md:right-420 md:top-548 lg:left-600 lg:top-525 xl:top-525 xl:left-226">
                <button
                    // className="bg-slate-100 w-9 h-9 rounded-full p-7 mt-12 shadow-xl relative ml-28 hover:bg-white hover:shadow-2xl"
                    onClick={onClick}
                >
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
};

export default class Slick extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="container max-w-screen-xl mx-auto">
                <h2>Custom Arrows</h2>
                <Slider {...settings}>
                    <div className="bg-gray-200 mx-2">
                        <h3>1</h3>
                    </div>
                    <div className="bg-gray-300 mx-2">
                        <h3>2</h3>
                    </div>
                    <div className="bg-gray-400 mx-2">
                        <h3>3</h3>
                    </div>
                    <div className="bg-gray-500 mx-2">
                        <h3>4</h3>
                    </div>
                    <div className="bg-gray-600 mx-2">
                        <h3>5</h3>
                    </div>
                    <div className="bg-gray-700 mx-2">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

// import Image from 'next/image';

// const Blog = () => {
//     return (
//         <section>
//             <div className="container max-w-screen-xl mx-auto bg-red-200">sruthi</div>
//         </section>
//     );
// };

// export default Blog;

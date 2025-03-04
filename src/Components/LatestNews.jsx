import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-[#F3F3F3] text-xl p-3 rounded'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1 rounded'>Latest</p>
            <Marquee className='gap-2'>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium velit maiores non fugit distinctio delectus eos at maxime itaque. | 
                </Link>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium velit maiores non fugit distinctio delectus eos at maxime itaque. |
                </Link>
                <Link to={"/news"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium velit maiores non fugit distinctio delectus eos at maxime itaque. |
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
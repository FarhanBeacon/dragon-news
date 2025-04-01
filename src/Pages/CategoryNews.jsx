import React from 'react';
import { useLoaderData } from 'react-router';

const CategoryNews = () => {
    const {data} = useLoaderData();
    // console.log(d);
    return (
        <div>
        <h1>{data.length} News in this category</h1>
        </div>
    );
};

export default CategoryNews;
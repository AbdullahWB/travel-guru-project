import React, { useEffect, useState } from 'react';
import './Home.css'
import Slider from '../Slider/Slider';

const Home = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.log(error))
    }, [])
    console.log(categories);
    return (
        <div className='w-[100%] mt-[150px]'>
           <Slider categories={categories} />
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const [toys , setToys] = useState([])
    useEffect(()=>{
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data))

    },[])

    return (
        <div className='m-16'>
           <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
            {/* key  */}
           {
                toys.map(toy => <AllToysCard key={toy.title} toy={toy}></AllToysCard>)
            }
           </div>
        </div>
    );
};

export default AllToys;
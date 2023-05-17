
import { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';


const AllToys = () => {
    const [toys , setToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setToys(data))

    },[])


    return (
        <div className='m-16'>
           <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
          
           {
                toys.map(toy => <AllToysCard key={toy._id} toy={toy}></AllToysCard>)
            }
           </div>
        </div>
    );
};

export default AllToys;
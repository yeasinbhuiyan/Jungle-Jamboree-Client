
import { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText , setSearchText] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${searchText || '1'}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }, [searchText])



    const handleSearch =(event)=>{
        event.preventDefault()
        const search = event.target.search.value 
        setSearchText(search)

    }
   


    return (
        <div className='m-16'>
            {/* <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    
                </div>
            </div> */}
            <form onSubmit={handleSearch} className="form-control">
                <div className="text-center my-10">
                    <input name='search' type="text" placeholder="Search…" className="input input-bordered" />
                    <input className=" bg-gradient-to-r from-gray-950 to-gray-600 p-3 rounded-lg font-semibold text-white" type="submit" value="Search" />
                </div>
            </form>



            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>

                {
                    toys.map(toy => <AllToysCard key={toy._id} toy={toy}></AllToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;
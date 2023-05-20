
import { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';
import { useLoaderData } from 'react-router-dom';


const AllToys = () => {
    const { toysQuantity } = useLoaderData()


    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const [itemsPerPage, setItemsPage] = useState(5)

    const totalPages = Math.ceil(toysQuantity / itemsPerPage)
    console.log(toysQuantity)
    const paginationBtn = [...Array(totalPages).keys()]




    useEffect(() => {
        const fetchToys = async () => {
            const response = await fetch(`http://localhost:5000/allToys/${searchText || '1'}?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setToys(data);
            // fetch(`http://localhost:5000/allToys/${searchText || '1'}`)
            // .then(res => res.json())
            // .then(data => setToys(data))
        }
            fetchToys()

        }, [searchText,currentPage])
    







    const handleSearch = (event) => {
        event.preventDefault()
        const search = event.target.search.value
        setSearchText(search)

    }

    // pagination 




    return (
        <div className='my-10'>
            {/* <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    
                </div>
            </div> */}
            <form onSubmit={handleSearch} className="form-control">
                <div className="text-center my-5">
                    <input name='search' type="text" placeholder="Search…" className="input input-bordered" />
                    <input className=" bg-gradient-to-r from-cyan-800 to-cyan-600 p-3 rounded-lg font-semibold text-white" type="submit" value="Search" />
                </div>
            </form>




            <div>
                <div className="overflow-x-auto">
                    <table className="table mx-auto text-center table-compact w-full">
                        <thead className='text-center'>
                            <tr className=''>
                                {/* <th>Image</th> */}
                                <th>Toys</th>
                                <th>Seller Name</th>
                                <th>Available</th>
                                <th>Price</th>
                                <th>Subcategory</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             toys &&  toys.map(toy => <AllToysCard key={toy._id} toy={toy}></AllToysCard>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

            <div className='mx-auto text-center text-7xl'>

                <div className='mx-auto btn-group text-center gap-5'>
                    {
                        paginationBtn.map(number => <button onClick={() => setCurrentPage(number)} className={currentPage == number ? 'btn btn-success' : "btn btn-xs"} key={number} >{number + 1}</button>)
                    }
                </div>
            </div>



        </div>
    );
};

export default AllToys;
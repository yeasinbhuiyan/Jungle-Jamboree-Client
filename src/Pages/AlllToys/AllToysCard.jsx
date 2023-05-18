import { Link } from "react-router-dom";


const AllToysCard = ({ toy }) => {
    const { toy_name, seller_name, subcategory, img, price, available_quantity ,_id } = toy
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-96 w-[600px]' src={img} alt="Movie" /></figure>
            <div className="card-body">
                
                   <h2 className="card-title text-2xl"> {toy_name}</h2>
             
               
               {
                   seller_name && <p className="font-semibold">Seller : {seller_name}</p>
                } 
                <p><span className="font-bold ">Available :</span> {available_quantity}</p>
                <h2 className="text-xl"><span className="font-bold">Price:</span> <span className="text-2xl">${price}</span></h2>
                <p className="text-lg"><span className="font-semibold">Subcategory:</span> <span className="text-sm font-semibold">{subcategory}</span></p>
                <div className="card-actions justify-end">
                   <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>
                </div>
            </div>
        </div>


    );
};

export default AllToysCard;
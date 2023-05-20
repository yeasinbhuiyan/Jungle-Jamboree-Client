import React from 'react';
import { Link } from 'react-router-dom';

const OceansCard = ({oceanAnimal}) => {
    const { toy_name, seller_name, subcategory, img, price, available_quantity, _id } = oceanAnimal
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{toy_name}</h2>
            <p>{price}</p>
            <div className="card-actions justify-end">
            <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>
            </div>
        </div>
    </div>
    );
};

export default OceansCard;
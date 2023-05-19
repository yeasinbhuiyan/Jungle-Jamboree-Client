import React from 'react';

const WildKingCard = ({wildKing}) => {
    const { toy_name, seller_name, subcategory, img, price, available_quantity, _id }= wildKing
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default WildKingCard;
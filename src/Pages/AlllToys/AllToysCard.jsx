

const AllToysCard = ({toy}) => {
    const {toy_name , seller_name , subcategory,img , price ,available_quantity} = toy
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className='h-96 w-[600px]' src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p className="card-title">{seller_name}</p>
          <p>{price}</p>
          <p>Avaiable : {available_quantity}</p>
          <p>{subcategory}</p>
          <div className="card-actions justify-end">
            <button className="btn-success btn"><small>View Details</small></button>
          </div>
        </div>
      </div>

      
    );
};

export default AllToysCard;
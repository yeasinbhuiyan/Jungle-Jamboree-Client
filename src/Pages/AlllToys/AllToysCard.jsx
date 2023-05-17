

const AllToysCard = ({toy}) => {
    const {toy_name , seller_name , subcategory,img , price ,available_quantity} = toy
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className='h-96 w-[600px]' src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl"> {toy_name}</h2>
          <p className="font-semibold">Seller : {seller_name}</p>
          <p className="text-xl"><span className="font-bold">Price:</span> ${price}</p>
          <p><span className="font-bold ">Avaiable :</span> {available_quantity}</p>
          <p className="text-lg"><span className="font-semibold">Subcategory:</span> <span className="text-sm font-semibold">{subcategory}</span></p>
          <div className="card-actions justify-end">
            <button className="btn-success btn"><small>View Details</small></button>
          </div>
        </div>
      </div>

      
    );
};

export default AllToysCard;
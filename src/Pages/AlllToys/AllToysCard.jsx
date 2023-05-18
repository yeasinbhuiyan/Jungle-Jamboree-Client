import { Link } from "react-router-dom";


const AllToysCard = ({ toy }) => {
    const { toy_name, seller_name, subcategory, img, price, available_quantity, _id } = toy
    console.log(subcategory)
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img className='h-96 w-[600px]' src={img} alt="Movie" /></figure>
        //     <div className="card-body">

        //         <h2 className="card-title text-2xl"> {toy_name}</h2>


        //         {
        //             seller_name && <p className="font-semibold">Seller : {seller_name}</p>
        //         }
        //         <p><span className="font-bold ">Available :</span> {available_quantity}</p>
        //         <h2 className="text-xl"><span className="font-bold">Price:</span> <span className="text-2xl">${price}</span></h2>
        //         <p className="text-lg"><span className="font-semibold">Subcategory:</span>

        //             <span className="text-sm font-semibold">{subcategory}</span>

        //             {/* <p className="text-lg"><span className="font-semibold">Subcategory:</span>
        //             {subcategory?.map((subcategory) => (
        //                 <span key={subcategory.value} className="text-sm font-semibold">{subcategory?.value}</span>
        //             ))}
        //         </p> */}


        //             <span className="text-sm font-semibold">{subcategory}</span></p>
        //         <div className="card-actions justify-end">
        //             <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>
        //         </div>
        //     </div>
        // </div>

        <>
            <tr>

                <td>
                    <div className="avatar">
                        <div className="rounded-full w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </td>
                <td>
                    {toy_name}
                </td>
                <td>
                    {seller_name}
                </td>
                <td>{available_quantity}</td>
                <td>{price}</td>
                <td>{subcategory.slice(0,13)}...</td>
                <td>
                <Link to={`/allToysDetails/${_id}`}> <button className="btn-success btn"><small>View Details</small></button></Link>
                </td>
            </tr>


        </>


    );
};

export default AllToysCard;
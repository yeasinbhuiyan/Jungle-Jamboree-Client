import { FaTrashAlt } from "react-icons/fa";
// import Modal from "./Modal";
import { Link } from "react-router-dom";



const MyToysTable = ({ toy, handleDelete }) => {
    const { img, seller_email, seller_name, available_quantity, price, toy_name, _id } = toy


    // const handleUpdate = (event) => {

    // console.log(id)

    //     const form = event.target
    //     const price = form.price.value
    //     const description = form.description.value
    //     const quantity = form.quantity.value

    //     const updateDetails = {

    //         price,
    //         description,
    //         quantity
    //     }
    //     console.log(updateDetails)

    // }




    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar mx-auto">
                            <div className="w-20 h-20 rounded ">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {
                    seller_name && seller_name
                    }
                </td>
                <td>{seller_email}</td>
                <td>
                    {
                    toy_name && toy_name
                    }</td>
                <td>${price}</td>
                <td>{
                available_quantity && available_quantity
                }</td>
                <th>

                    <Link className="btn-success" to={`/updateMyToys/${_id}`}><small className="text-sm">Update</small></Link>
                </th>

                <th>
                    <FaTrashAlt onClick={() => handleDelete(_id)} className="text-red-600 mx-auto cursor-pointer"></FaTrashAlt>
                </th>
            </tr>

        </>


    );
};

export default MyToysTable;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToys = () => {
    const toy = useLoaderData()
    console.log(toy)
    const {price , _id , description , available_quantity} = toy 
    // console.log(quantity)
    const handleUpdate=()=>{

    }

    return (
        <div className='m-10'>
            <h1 className='font-semibold text-center text-3xl'>Update Your Details</h1>
            <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols- m-10 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered" required/>
                        </div>
                   
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" defaultValue={available_quantity} name='quantity' placeholder="Available Quantity" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-0">Description</span>
                            </label>
                            <textarea defaultValue={description} className="textarea textarea-bordered" type="text" defaultValue={description} name='description' placeholder="Description"  required />
                        </div>


                    
                    </div>
                    <div className="modal-action px-10 mt-0">
                    <input className='btn-success btn' type="submit" value="Update" />
                       
                    </div>
                </form>
        </div>
    );
};

export default UpdateMyToys;
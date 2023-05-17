import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const AddToys = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target
        const seller_name = form.seller_name.value
        const seller_email = form.seller_email.value

        const toy_name = form.toy_name.value
        const description = form.description.value
        const available_quantity = form.quantity.value
        const subcategory = form.subcategory.value
        const price = form.price.value
        const ratings = form.rating.value
        const img = form.img.value

        const addToysDetails = {
            img,
            toy_name,
            seller_name,
            seller_email,
            price,
            ratings,
            available_quantity,
            subcategory,
            description,


        }
        console.log(addToysDetails)
        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToysDetails)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
            })

    }
    return (



        <div className='m-10 my-24'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='seller_name' placeholder="Your Name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='seller_email' placeholder="Your Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy_name' placeholder="Toy Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Image</span>
                        </label>
                        <input type="url" name='img' placeholder="URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory</span>
                        </label>
                        <input type="text" name='subcategory' placeholder="Subcategory" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success">Login</button>
                </div>
            </form>
        </div>


    );
};

export default AddToys;
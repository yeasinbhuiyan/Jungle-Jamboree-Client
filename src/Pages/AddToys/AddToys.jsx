import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import CreatableSelect from "react-select/creatable";
const AddToys = () => {
    const { user } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target
        const seller_name = form.seller_name.value
        const seller_email = form.seller_email.value

        const toy_name = form.toy_name.value
        const description = form.description.value
        const available_quantity = form.quantity.value
        // const subcategory = form.subcategory.value
        const price = parseFloat(form.price.value)
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
            subcategory: selectedOption,
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
    const options = [
        { value: 'Cow Ride-On Toys', label: 'Cow Ride-On Toys' },
        { value: 'Cow Learning Toys', label: 'Cow Learning Toys' },
        { value: 'Cow Plushies', label: 'Cow Plushies' },


        { value: 'Roaring Kings', label: 'Roaring Kings' },
        { value: 'Lion Pride Plush', label: 'Lion Pride Plush' },
        { value: 'Cowardly Lion', label: 'Cowardly Lion' },

        { value: 'Teddy Bear', label: 'Teddy Bear' },
        { value: 'Red Panda', label: 'Red Panda' },
        { value: 'Plush Panda', label: 'Plush Panda' },

        { value: 'Nutty Elepent', label: 'Nutty Elepent' },
        { value: 'Pink Elepent', label: 'Pink Elepent' },
        { value: 'Rubber Elepent', label: 'Rubber Elepent' },

        { value: 'Perky Penguin', label: 'Plush Panda' },
        { value: 'Christmas penguin', label: 'Christmas penguin' },
        { value: 'Baby penguin', label: 'Baby penguin' },



        { value: 'Majestic Tiger', label: 'Majestic Tiger' },
        { value: 'Woolen Tiger', label: 'Woolen Tiger' },
        { value: 'Fluffy Tiger', label: 'Fluffy Tiger' },



    ];

    return (



        <div className='m-10 my-24'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='seller_name' placeholder="Your Name" className="input input-bordered" />
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
                        <CreatableSelect
                            className="w-full h-full top-[5px]"
                            name="subcategory"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                        {/* <input type="text" name='subcategory' placeholder="Subcategory" className="input input-bordered" required /> */}

                    </div>



                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success">Add Toys</button>
                </div>
            </form>
        </div>


    );
};

export default AddToys;
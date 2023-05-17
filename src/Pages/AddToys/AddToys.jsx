
const AddToys = () => {
    const handleSubmit = (event) => {
        //     "img": "https://media.istockphoto.com/id/481198620/photo/terrier-playing-with-a-colourful-ball.jpg?b=1&s=170667a&w=0&k=20&c=txqB6WUbT7TjZwSn40JFRwykkmGUTKHVwu1gJlygUSA=",
        //     "toy_name": "Dogs",
        //     "seller_name": "Puppy Paradise",
        //     "seller_email": "sales@puppyparadise.com",
        //     "price": "14.99",
        //     "ratings": 4.8,
        //     "available_quantity": 12,
        //     "subcategory": "Teddy Bear , Horse , Dinosaur , Cat , Unicorn , Cows , Rabbit , Elephant , Penguin",
        //     "description": "Adorable and playful dog toys that are perfect for interactive playtime."
        // },
        event.preventDefault()
        const form = event.target
        const sellerName = form.seller_name.value
        const sellerEmail = form.seller_email.value

        const toyName = form.toy_name.value
        const description = form.description.value
        const quantity = form.quantity.value
        const subcategory = form.subcategory.value
        const price = form.price.value
        const rating = form.rating.value
        const img = form.img.value

        const addToysDetails = {
            img,
            toy_name: toyName,
            seller_name: sellerName,
            seller_email: sellerEmail,
            price,
            ratings: rating,
            available_quantity: quantity,
            subcategory,
            description,


        }
        console.log(addToysDetails)
    }
    return (



        <div className='m-10 my-24'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='seller_name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name='seller_email' placeholder="Your Email" className="input input-bordered" required />

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
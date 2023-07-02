import { useEffect, useState } from 'react';
import './Gallery.css'


const Gallery = () => {
    const [gallery, setGellery] = useState([])
    useEffect(() => {
        fetch('img.json')
            .then(res => res.json())
            .then(data => setGellery(data))

    }, [])
    return (
        <div data-aos="fade-up">
            <div className="md:p-20 my-20">
                <h1 className="text-center font-semibold text-3xl">Gallery Collection </h1>
                <p data-aos="fade-up" className='text-center font-semibold w-[80%] my-5 text-sm mx-auto'>Welcome to our animal toys gallery collection, where the enchanting world of creatures comes alive. Dive into a whimsical realm filled with an array of adorable and lifelike animal toys that will ignite the imaginations of young and old alike. From cuddly plush companions that offer comfort and companionship to meticulously crafted figurines that capture the essence of wild animals in intricate detail, our collection celebrates the beauty and diversity of the animal kingdom. Each toy is meticulously designed to inspire wonder, nurture curiosity, and foster a deep connection with nature. Join us in this captivating exploration as we invite you to embark on a delightful adventure through the magic of animal playthings.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 p-10'>


                    {
                        gallery.map(image => <img key={image.img} className="img-hover rounded w-96 h-80" src={image.img} alt="" />)
                    }


                </div>
            </div>
        </div>

    );
};

export default Gallery;
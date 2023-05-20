import './Gallery.css'


const Gallery = () => {
    return (
        <div className="md:p-20 my-20">
            <h1 className="text-center font-semibold text-3xl">Gallery Collection </h1>
            <p className='text-center font-semibold w-[80%] my-5 text-sm mx-auto'>Welcome to our animal toys gallery collection, where the enchanting world of creatures comes alive. Dive into a whimsical realm filled with an array of adorable and lifelike animal toys that will ignite the imaginations of young and old alike. From cuddly plush companions that offer comfort and companionship to meticulously crafted figurines that capture the essence of wild animals in intricate detail, our collection celebrates the beauty and diversity of the animal kingdom. Each toy is meticulously designed to inspire wonder, nurture curiosity, and foster a deep connection with nature. Join us in this captivating exploration as we invite you to embark on a delightful adventure through the magic of animal playthings.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 p-10'>
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/PYSkpVX/gallery1.jpg" alt="" />
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/6P53z0d/gallery2.jpg" alt="" />
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/C0NdhJY/gallery3.jpg" alt="" />
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/YPPQQJR/gallery4.jpg" alt="" />
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/vLZPqKB/gallery5.jpg" alt="" />
               <img className="img-hover rounded w-96 h-80" src="https://i.ibb.co/nzfRRMn/gallery6.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;
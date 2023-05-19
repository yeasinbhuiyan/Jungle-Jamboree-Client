import './Gallery.css'


const Gallery = () => {
    return (
        <div className="md:p-20 my-20">
            <h1 className="text-center font-semibold text-3xl">Gallery Collection </h1>
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
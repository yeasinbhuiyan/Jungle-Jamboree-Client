
import './Banner.css'
import img1 from '../../../assets/front-view-epiphany-day-female-figurine-with-sheep.jpg'
import img2 from '../../../assets/38076.jpg'
import img3 from '../../../assets/plush-toy-baby-socks.jpg'
import img4 from '../../../assets/349.jpg'



const Banner = () => {
   


    return (
      

        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-xl" />
            <div className="absolute h-full flex rounded-xl items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Jungle Jamboree</span> <br /> Unleash the Fun <br /> with Animal Toys Galore</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Jungle Jamboree: Unleash the Fun with Animal Toys Galore! Discover a vibrant collection of animal toys that ignite imagination and bring joy to playtime. From cuddly companions to interactive wonders, our virtual jungle is filled with roaring lions, soaring eagles, and playful monkeys. Let the adventure begin as your child creates wild tales and embarks on unforgettable playtime journeys. Join us at Jungle Jamboree, where fun knows no bounds</p>
                  
                  
                  
                


                </div>

            </div>
            <div className="absolute flex  justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 me-5">❮</a>
                <a href="#slide2" className="btn btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl h-full flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

              
            <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Jungle Jamboree</span> <br /> Unleash the Fun <br /> with Animal Toys Galore</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Jungle Jamboree: Unleash the Fun with Animal Toys Galore! Discover a vibrant collection of animal toys that ignite imagination and bring joy to playtime. From cuddly companions to interactive wonders, our virtual jungle is filled with roaring lions, soaring eagles, and playful monkeys. Let the adventure begin as your child creates wild tales and embarks on unforgettable playtime journeys. Join us at Jungle Jamboree, where fun knows no bounds</p>
                  
                  
                  
                


                </div>

            </div>

            <div className="absolute flex  justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 me-5">❮</a>
                <a href="#slide3" className="btn btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 btn-circle">❯</a>
            </div>
        </div>



        <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute h-full flex rounded-xl items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

               
            <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Jungle Jamboree</span> <br /> Unleash the Fun <br /> with Animal Toys Galore</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Jungle Jamboree: Unleash the Fun with Animal Toys Galore! Discover a vibrant collection of animal toys that ignite imagination and bring joy to playtime. From cuddly companions to interactive wonders, our virtual jungle is filled with roaring lions, soaring eagles, and playful monkeys. Let the adventure begin as your child creates wild tales and embarks on unforgettable playtime journeys. Join us at Jungle Jamboree, where fun knows no bounds</p>
                  
                  
                  
                


                </div>

            </div>
            <div className="absolute flex  justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 me-5">❮</a>
                <a href="#slide4" className="btn btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute h-full flex items-center rounded-xl  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

            <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Jungle Jamboree</span> <br /> Unleash the Fun <br /> with Animal Toys Galore</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Jungle Jamboree: Unleash the Fun with Animal Toys Galore! Discover a vibrant collection of animal toys that ignite imagination and bring joy to playtime. From cuddly companions to interactive wonders, our virtual jungle is filled with roaring lions, soaring eagles, and playful monkeys. Let the adventure begin as your child creates wild tales and embarks on unforgettable playtime journeys. Join us at Jungle Jamboree, where fun knows no bounds</p>
                  
                  
                  
                


                </div>

                
            </div>

            <div className="absolute flex  justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 me-5">❮</a>
                <a href="#slide1" className="btn btn-outline text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 btn-circle">❯</a>
            </div>
        </div>
    </div>

    );
};



export default Banner;
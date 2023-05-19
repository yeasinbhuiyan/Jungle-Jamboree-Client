import img from '../../../assets/12210.jpg'



const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center mx-auto'>
            <div className='mx-auto'>
                <div>
                    <img className='h-full w-96 rounded' src={img} alt="" />
                </div>
            </div>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-4xl font-semibold'>About Us</h1>
                <div className='space-y-3'>
                    <h1 className='font-mono  text-3xl'>Join Our Animal Toys Adventure</h1>
                    <p className='font-medium text-sm'>Step into a world of imagination, exploration, and endless fun with Jungle Jamboree. Browse our extensive collection of animal toys and discover a world where creativity knows no bounds. We invite you to join our community of animal lovers and embark on an exciting adventure that will inspire joy, learning, and unforgettable memories.</p>
                </div>
                <div>
                <h1 className='font-mono  text-3xl'>Making a Positive Impact Together</h1>
                    <p className='font-medium text-sm'>Jungle Jamboree we believe in the power of giving back. We are committed to making a positive impact on both our local and global communities. Through partnerships with reputable animal welfare organizations and conservation initiatives, we actively support efforts to protect and preserve the diverse wildlife that inspires our toys. Additionally, we strive to adopt eco-friendly practices in our operations, using sustainable packaging materials and reducing our environmental footprint. When you choose [Website Name], you not only bring joy to your loved</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
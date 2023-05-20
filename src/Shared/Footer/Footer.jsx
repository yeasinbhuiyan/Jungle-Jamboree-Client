
// import { Link } from 'react-router-dom';
// import {  FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '/logo.jpeg'
import './Footer.css'
import { FaArrowRight, FaFacebook, FaGithub, FaGoogle, FaGooglePlusG, FaMailchimp } from 'react-icons/fa';


const Footer = () => {
    return (
        <>

            {/* <footer className='bg-gradient-to-r from-green-800  to-gray-500'> */}
            {/* <section className="p-5 m-top footer-bg">

            <div className="grid grid-cols-1 lg:grid-cols-4   p-5">

                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>SHOP</Link></h1>
                    <ul className="">
                        <li className="mt-3 text-gray-400 font-medium"><Link>Plans</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Food Recipes</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Vagitable Food Item</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Foreign food </Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>PayGo Plan</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Add a Line</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>SERVICE FEATURES</Link></h1>
                    <ul className="ul">
                        <li className="mt-3 text-gray-400 font-medium"><Link>Coverage</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>5G</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Features</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>uTalk</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call China</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call Mexico</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call India</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>ABOUT Our Chef Recipes</Link></h1>
                    <ul className="ul">
                        <li className="mt-2 text-gray-400 font-medium"><Link>Chefs Specialties</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Healthy Eating</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Global Cuisine </Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Cookie Notice</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Careers</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>In The News</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>FAQ</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Recipes Order Status</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100">Subscribe to our newsletter below.</h1>
                    <div className="flex  mt-3">
                 

                        <input className="rounded p-2 text-gray-300" placeholder="Email" type="text" />

                        <button className=" bg-gradient-to-r from-gray-950 to-gray-600 p-3 rounded-lg font-semibold text-white">Sign Up</button>
                    </div>
                    <div className="flex mt-3">




                        

                        <div className='p-2'>
                        <FaDiscord></FaDiscord>

                        </div>
                        <div className='p-2'>
                        <FaInstagram></FaInstagram>

                        </div>

                       

                        <div className='p-2'>
                        <FaTwitter ></FaTwitter>

                        </div>
                    </div>

                </div>

            </div>
        </section> */}
            <footer className="footer   p-10 py-20 bg-blue-300">
                <div>

                  
                    <h1 className="font-bold text-black flex items-center mb-4  top-8 "><span className="text-2xl flex items-center text-gradient">  <FaMailchimp className="mr-1 text-blue-950 text-2xl"></FaMailchimp> Jungle</span> <sub className="font-mono text-sm ml-1">Jamboree</sub></h1>
                    <p className='text-sm font-lg font-semibold w-56'>Discover the wild world of Jungle Jamboree Toys! Explore our vast collection of animal-inspired toys.</p>
                </div>
                <div>
                    <span className="text-gray-700 font-bold text-xl">About</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Toys Information</a>
                    <a className="link link-hover">Press Contacts</a>
                </div>

                <div>
                    <span className="text-gray-700 font-bold text-xl">Legal Information</span>
                    <a className="link link-hover"> Trademarks</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover"> Cookie Policy</a>
                </div>
                <div>
                    <span className="text-gray-700 font-bold text-xl">Services</span>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Online Delivery</a>
                    <a className="link link-hover">Toy Marketing</a>
                    <a className="link link-hover">Help Center</a>
                </div>

                <div>
                    <span className="text-gray-700 font-bold text-xl">Newsletter</span>
                    <div className='flex items-center'>
                        <input className='p-3 rounded' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <button className='p-4 btn-success rounded-full'><FaArrowRight></FaArrowRight></button>
                    </div>
                    {/* <hr  className='text-gray'/> */}
                    <div className='gap-4 flex text-2xl mt-5'>
                        <FaGithub></FaGithub>
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                    </div>
                </div>
            </footer>


            {/* </footer> */}


        </>
    );
};

export default Footer;
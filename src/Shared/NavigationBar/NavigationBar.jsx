import { Link } from "react-router-dom";
import logo from '/logo.jpeg';
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.photoURL)
    const handleLogout = () => {
        logOut()
    }
    const navigationLink = <>
        <li><Link to='/'>Home</Link></li>

        <li><Link to='/allToys'>All Toys</Link></li>
        
        {
            user && <>

                <li><Link to='/myToys'>My Toys</Link></li>
                <li><Link to='/addToys'>Add a Toys</Link></li>
            </>
        }

        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>



    </>




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navigationLink}
                    </ul>
                </div>

                <div className="flex flex-col ">
                    <img className="w-20 ml-5" src={logo} alt="" />
                    <h1 className="font-bold absolute top-14">Jungle Jamboree</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-10 font-semibold  menu-horizontal px-1">
                    {navigationLink}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? <button className="btn-success btn px-1" onClick={handleLogout}>Logout</button> :
                    <Link to='/login' className="btn-success btn px-1"> Login </Link>
                }


                {
                    user?.photoURL && <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img title={user?.displayName} src={user?.photoURL} alt="" />
                        </div>
                    </div>
                }

            </div>

        </div>

    );
};

export default NavigationBar;
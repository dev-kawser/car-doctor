import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextProvider";


const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)

    const links = <>

        <li> <NavLink to="/" >Home</NavLink> </li>
        <li> <NavLink to="about" >About</NavLink> </li>
        <li> <NavLink to="service" >Service</NavLink> </li>
        <li> <NavLink to="/bookings" >Bookings</NavLink> </li>
        <li> <NavLink to="contact" >Contact</NavLink> </li>

    </>

    return (
        <div className="navbar bg-base-100 drop-shadow-lg py-5 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" hover:scale-105 transition-all text-xl">
                    <img className="w-[70px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold flex gap-3">
                    {links}
                </ul>
            </div>
            {
                user

                    ?

                    <div className="navbar-end">
                        <button onClick={LogOut} className="btn btn-success text-white">Logout</button>
                    </div>

                    :

                    <div className="navbar-end">
                        <Link to="/login" className="btn btn-success text-white">Login</Link>
                        <Link to="/register" className="btn btn-error ml-3 text-white">Register</Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;
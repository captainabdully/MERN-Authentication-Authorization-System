import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({user, setUser}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/login");
    }
    return <nav className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to="/" className='text-white text-lg font-bold'>Mern Auth</Link>
            <div>
            {user ? (
                <>
                    <span className='mr-4'>Hello, {user.username}</span>
                    <button className='bg-red-500 p-2 rounded hover:bg-red-600 px-4 py-2 text-white'
                    onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link className='text-white hover:underline font-bold p-2' to="/login">Login</Link>
                    <Link className='text-white hover:underline font-bold p-2' to="/register">Register</Link>
                </>
            )}
            </div>
        </div>
    </nav>
};


export default Navbar;
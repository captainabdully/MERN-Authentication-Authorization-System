import React from 'react'
import { Link } from 'react-router-dom'

function Home({ user,error }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md border border-gray-300'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Welcome {user?.username}!</h2>
        {error && <p className='mb-4 text-red-500 text-center'>{error}</p>}
        {user ? (
          <div className='text-center'>
            <p className='text-gray-600'>Email: {user.email}</p>
          </div>
        ) : (
          <div className='flex flex-col space-y-4 mt-6'>
          <h2 className='text-xl font-bold mb-6 text-center'>Please log in or Register!!</h2>
          <div className='flex flex-col space-y-4 mt-6'>
           <Link className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded" to="/login">Login</Link> 
           <Link className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-center font-bold py-2 px-4 rounded" to="/register"> Register</Link>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
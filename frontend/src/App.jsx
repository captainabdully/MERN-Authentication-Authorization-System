import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import NotFound from './components/NotFound'; 



function App() {
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
console.log(user);


useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem('token');
     if (token) {
      try{
        const res = await axios.get('api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
       setUser(res.data);
      }catch (err) {
        setError(err.message);
        localStorage.removeItem('token');
      }
      }
      setIsLoading(false);
     };
      fetchUser();

   }, []);

     if (isLoading) {
  return (
  <div className='min-h-screen bg-gray-900 flex items-center justify-center'>
    <div className='text-xl text-white'>Loading...</div>
  </div>
  );
}



  return (
   <Router>
    <Navbar user={user} setUser={setUser} />
    <Routes>
      <Route path='/' element={<Home user={user} error={error} />} />
      <Route path='/login' element={ user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
      <Route path='/register' element={ user ? <Navigate to="/" /> : <Register setUser={setUser} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </Router>
  );
}

export default App

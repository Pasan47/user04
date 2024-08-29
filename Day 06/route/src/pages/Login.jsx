import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login, logout } from '../store/authSlice';

const Login = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogin = () => {
  dispatch(login());      // Navigate to the desired route after login

  navigate('/AllPost'); // route you want to redirect to
};

const handleLogout = () => {
  dispatch(logout());    // Navigate to the desired route after logout
  
  navigate('/AddPost'); //  route you want to redirect to
};


  return (
    <>
    <div className="flex flex-col items-center p-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
  Login
  </h1>
      
      <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-4 focus:shadow-outline" 
      type="button"
      onClick={handleLogin}>
        Login
      </button>
      <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-4 focus:shadow-outline" 
      type="button"
      onClick={handleLogout}>
        Logout
      </button> 
    </div>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
  </form>
</div>
</div>
    </>
  )
}

export default Login

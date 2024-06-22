import { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import bcrypt from 'bcryptjs'
import axios from '../../api/axios'

const Login = () => {
  const { setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState('');
  const BaseUrl = "http://localhost:8000"


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [info, setInfo] = useState({
    username: "EJE@gmail.com",
    password: "EJE",
  })

  const [remember, setRemember] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo((prevInfo) => ({
      ...prevInfo, [name]: value
    }));
  }

  const get = async () => {
    try {
      
      const result = await axios.post(`${BaseUrl}/auth/login`,
        JSON.stringify({ username: info.username, password: info.password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        })
      // const result = await axios.post('http://localhost:3000/auth/login/', {
      //   username: info.username,
      //   password: info.password,
      // });
      const user = result.data;

      if (user) {
        // Account found
        console.log('Matching user:', user);
        const accessToken = result.data.accessToken;
        setAuth({ username: info.username, accessToken })
        navigate(from, { replace: true });
      } else {
        // Account not found or incorrect password
        console.log('Account not found or incorrect password');
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();



    setInfo({
      ...info,
      username: info.username.trim(), // Trim whitespace from the username
    });

    setRemember(false);

    get();
  };

  return (
    <div className='h-ful pt-44 pb-12 w-full flex justify-center bg-beige items-center flex-col'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-start text-lg gap-4 p-10 rounded-md border-2'>
      <h1 className='text-4xl font-semibold text-color5 mx-auto'>Log in</h1>
      <p className={errMsg ? 'text-red-500' : "hidden"} aria-live="assertive">{errMsg}</p>
        <div className='flex flex-col'><label htmlFor="username">Username or email</label>
          <input type="text" name="username" onChange={handleChange} value={info.username} className='h-11 w-96 border-2 rounded-md p-2 outline-none focus:border-color5 ' /></div>
        <div className='flex flex-col'><label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} value={info.password} className='h-11 w-96 border-2 rounded-md p-2 outline-none focus:border-color5 ' /></div>
        <div className='flex gap-2 '>
          <input type="checkbox" name="notify" onChange={() => setRemember(!remember)} checked={remember} />
          <label htmlFor="notify">Send me promotional emails/notifications</label>
        </div>
        <button type="submit" className='flex justify-center items-center text-white bg-blue-500 bg-dark-blue hover:bg-light-blue w-96 h-11 rounded-md cursor-pointer'>Log in</button>
        <span>Don't have an account? <Link to="/signup" className='hover:underline'>Sign up</Link></span>
      </form>
    </div>
  )
}

export {Login}
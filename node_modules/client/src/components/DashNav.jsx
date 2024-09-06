import React, {useState, useEffect} from 'react'
import useLogout from '../hooks/useLogout';
import {useNavigate} from 'react-router-dom'
import useAxiosPrivate from '../hooks/useAxioxPrivate'


const DashNav = ({setPage}) => {
    const [userData, setUserData] = useState({});
    const axiosPrivate = useAxiosPrivate();

    const getUserData = async () => {
        try {
            const result = await axiosPrivate.get("/auth/getinfo");
            setUserData(result.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, [])


    const logout = useLogout();
    const navigate = useNavigate();
    
    const signout = async () => {
        await logout();
        navigate('/');
    }

    return (
        <nav className='z-[10000] fixed h-24 top-0 left-0 right-0 w-full text-[#e0ded2] font-semibold text-xl bg-[#1f212d] px-12 flex justify-between items-center'>
            <h1>welcome {userData.fullName}</h1>
            <ul className='flex items-center h-full'>
                <li className='bg-[#1f212d] hover:bg-[#1f212dc9] h-full w-40'><button onClick={() => setPage("articles")} className='w-full h-full'>articles</button></li>
                <li className='bg-[#1f212d] hover:bg-[#1f212dc9] h-full w-40'><button onClick={() => setPage("events")} className='w-full h-full'>events</button></li>
                <li className='bg-[#1f212d] hover:bg-[#1f212dc9] h-full w-40'><button onClick={() => setPage("newsletter")} className='w-full h-full'>newsletter</button></li>
                <li className='bg-[#1f212d] hover:bg-[#1f212dc9] h-full w-40'><button onClick={() => setPage("email")} className='w-full h-full'>emails</button></li>
                <li className='bg-[#1f212d] hover:bg-[#1f212dc9] h-full w-40'><button onClick={() => setPage("settings")} className='w-full h-full'>settings</button></li>
            </ul>
            <button className='hover:underline underline-offset-2' onClick={signout}>log out</button>
        </nav>
    )
}

export default DashNav
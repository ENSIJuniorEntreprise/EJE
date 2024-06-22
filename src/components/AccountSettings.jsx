import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxioxPrivate';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const AccountSettings = () => {
    const [admins, setAdmins] = useState([]);
    const [userData, setUserData] = useState({});
    const [showAddAdminPopup, setShowAddAdminPopup] = useState(false);
    const [newAdminData, setNewAdminData] = useState({ fullName: '', username: '', password: '' });
    const axiosPrivate = useAxiosPrivate();
    const BaseUrl = "http://102.211.210.43/api"


    const getUserData = async () => {
        try {
            const result = await axiosPrivate.get("/auth/getinfo");
            setUserData(result.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/auth/accounts`);
            setAdmins(res.data.filter((item) => item._id !== userData._id));
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const handleAddAdmin = () => {
        setShowAddAdminPopup(true);
    }

    const handleAddAdminSubmit = async (event) => {
        event.preventDefault();

        // Encrypt the password using bcrypt before sending it to the backend
        const hashedPassword = await bcrypt.hash(newAdminData.password, 10);

        const dataToSend = {
            ...newAdminData,
            password: hashedPassword
        };

        try {
            await axios.post(`${BaseUrl}/auth/signup`, dataToSend);
            // Refresh admins list
            fetchData();
            setShowAddAdminPopup(false);
        } catch (error) {
            console.log("Error adding admin: ", error);
        }
    }

    const handleDeleteAdmin = async (adminId) => {
        try {
            await axios.delete(`${BaseUrl}/auth/${adminId}`);
            // Refresh admins list
            fetchData();
        } catch (error) {
            console.log("Error deleting admin: ", error);
        }
    }

    useEffect(() => {
        getUserData();
        fetchData();
    }, []);

    return (
        <div className='px-20 py-44 bg-[#e0ded2] text-[#1f212d] flex flex-col items-start gap-10'>

            <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col gap-10'>

                    <h1 className='text-2xl font-semibold'>Current admin: </h1>
                    <h1 className='flex items-center gap-10'>
                        <h1 className='text-xl'>{userData.fullName}</h1>
                    </h1>

                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-2xl font-semibold'>Users: </h1>
                <button onClick={handleAddAdmin} className='bg-[#1f212d] text-[#e0ded2] px-4 py-2 rounded'>Add admin</button>
            </div>
            <ul className=''>
                {admins.map((admin, index) => {
                    if (admin._id !== userData._id) {
                        return (
                            <li key={index} className='flex items-center gap-10'>
                                <h1 className='text-xl'>• {admin.fullName}</h1>
                                <button onClick={() => handleDeleteAdmin(admin._id)} className='bg-[#1f212d] text-[#e0ded2] px-4 py-2 rounded'>Remove admin</button>
                            </li>
                        )
                    }
                })}
            </ul>

            {showAddAdminPopup && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Add Admin</h3>
                                        <form onSubmit={handleAddAdminSubmit}>
                                            <div className="mb-4">
                                                <input type="text" placeholder="Full Name" value={newAdminData.fullName} onChange={(e) => setNewAdminData({ ...newAdminData, fullName: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                            </div>
                                            <div className="mb-4">
                                                <input type="text" placeholder="Username" value={newAdminData.username} onChange={(e) => setNewAdminData({ ...newAdminData, username: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                            </div>
                                            <div className="mb-6">
                                                <input type="password" placeholder="Password" value={newAdminData.password} onChange={(e) => setNewAdminData({ ...newAdminData, password: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Admin</button>
                                                <button onClick={() => setShowAddAdminPopup(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AccountSettings;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventPop from "./EventPop"

const Event = () => {
    const [data, setData] = useState([]);
    const [editableRows, setEditableRows] = useState({});
    const [editedItemData, setEditedItemData] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const BaseUrl = "https://ej-ebackend.vercel.app"


    const fetchData = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/event`);
            setData(res.data.events);
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = async (index) => {
        try {
            if (editedItemData._id) {
                const res = await axios.put(`${BaseUrl}/event/${editedItemData._id}`, editedItemData);
                console.log("Data updated:", res.data);
                fetchData();
                setEditedItemData({});
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`${BaseUrl}/event/${id}`);
            console.log("Item deleted:", res.data);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (index, item) => {
        setEditableRows({ ...editableRows, [index]: true });
        setEditedItemData(item);
    };

    const handleSave = (index) => {
        setEditableRows({ ...editableRows, [index]: false });
        updateData(index);
    };

    const handleCheckboxChange = (e, index) => {
        const checked = e.target.checked;
        const newData = [...data]; // Make a copy of the data array
        newData[index].newest = checked; // Update the newest value in the copied data array
        setData(newData); // Update the state with the new data
    };


    const handleInputChange = (e, key, subIndex = null) => {
        const value = e.target.value;
        if (subIndex !== null) {
            setEditedItemData(prevData => ({
                ...prevData,
                [key]: [
                    ...prevData[key].slice(0, subIndex),
                    value,
                    ...prevData[key].slice(subIndex + 1)
                ]
            }));
        } else {
            setEditedItemData(prevData => ({
                ...prevData,
                [key]: value
            }));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDropPhoto = (e, index, photoIndex) => {
        e.preventDefault(); // Add this line to prevent the default behavior
        console.log(e);
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedItemData(prevData => ({
                ...prevData,
                photos: [
                    ...prevData.photos.slice(0, photoIndex),
                    reader.result,
                    ...prevData.photos.slice(photoIndex + 1)
                ]
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleFileInputChange = (e, index, photoIndex) => {
        e.preventDefault();

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedItemData(prevData => ({
                ...prevData,
                photos: [
                    ...prevData.photos.slice(0, photoIndex),
                    reader.result,
                    ...prevData.photos.slice(photoIndex + 1)
                ]
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='px-20 py-44 bg-[#e0ded2] text-[#1f212d]'>
            <button className="bg-[#1f212d] float-right text-[#e0ded2] px-4 py-2 rounded mb-4" onClick={() => setShowPopup(true)}>Add New Event</button>
            {showPopup && (
                <EventPop togglePopup={() => setShowPopup(false)} fetchData={fetchData} />
            )}

            <table className='mt-24 w-full table-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 border border-[#1f212d]'>Title</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Description</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>SubTitle 1</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>SubTitle 2</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Photo 1</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Photo 2</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Date</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Paragraph 1</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Paragraph 2</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Newest</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice().reverse().map((event, index) => (
                        <tr key={event._id}>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.title || event.title} onChange={(e) => handleInputChange(e, 'title')} /> : event.title}
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.description || event.description} onChange={(e) => handleInputChange(e, 'description')} /> : (event.description.length > 50 ? event.description.substring(0, 50) + '...' : event.description)}
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.subTitles && editedItemData.subTitles[0] || event.subTitles[0]} onChange={(e) => handleInputChange(e, 'subTitles', 0)} /> : event.subTitles[0]}
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.subTitles && editedItemData.subTitles[1] || event.subTitles[1]} onChange={(e) => handleInputChange(e, 'subTitles', 1)} /> : event.subTitles[1]}
                            </td>
                            <td className='min-w-[100px] max-w-[100px] px-4 py-2 border border-[#1f212d] overflow-hidden' onDragOver={handleDragOver} onDrop={(e) => handleDropPhoto(e, index, 0)}>
                                {editableRows[index] ?
                                    <input type="file" onChange={(e) => handleFileInputChange(e, index, 0)} /> :
                                    event.photos[0] && <img src={event.photos[0]} alt={`Photo 1`} className='w-16 h-16 object-cover' />
                                }
                            </td>
                            <td className='min-w-[100px] max-w-[100px] px-4 py-2 border border-[#1f212d] overflow-hidden' onDragOver={handleDragOver} onDrop={(e) => handleDropPhoto(e, index, 1)}>
                                {editableRows[index] ?
                                    <input type="file" onChange={(e) => handleFileInputChange(e, index, 1)} /> :
                                    event.photos[1] && <img src={event.photos[1]} alt={`Photo 2`} className='w-16 h-16 object-cover' />
                                }
                            </td>

                            <td className='min-w-[120px] max-w-[120px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ?
                                    <input type="text" value={formatDate(editedItemData.date || event.date)} onChange={(e) => handleInputChange(e, 'date')} /> :
                                    formatDate(event.date)
                                }
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.paragraphs && editedItemData.paragraphs[0] || event.paragraphs[0]} onChange={(e) => handleInputChange(e, 'paragraphs', 0)} /> : (event.paragraphs[0].length > 50 ? event.paragraphs[0].substring(0, 50) + '...' : event.paragraphs[0])}
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] overflow-hidden'>
                                {editableRows[index] ? <input type="text" value={editedItemData.paragraphs && editedItemData.paragraphs[1] || event.paragraphs[1]} onChange={(e) => handleInputChange(e, 'paragraphs', 1)} /> : (event.paragraphs[1].length > 50 ? event.paragraphs[1].substring(0, 50) + '...' : event.paragraphs[1])}
                            </td>
                            <td className='min-w-[50px] max-w-[50px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ?
                                    <input
                                        type="checkbox"
                                        checked={event.newest}
                                        onChange={(e) => handleCheckboxChange(e, index)}
                                    />

                                    :
                                    (event.newest ? 'Yes' : 'No')
                                }
                            </td>
                            <td className='max-w-[140px] min-w-[140px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ? <button className='mr-2 bg-[#2ea3dd] text-[#e0ded2] px-4 py-2 rounded' onClick={() => handleSave(index)}>Save</button> : <button className='mr-2 bg-[#2ea3dd] text-[#e0ded2] px-4 py-2 rounded' onClick={() => handleEdit(index, event)}>Edit</button>}
                                <button className='bg-[#1f212d] text-[#e0ded2] px-4 py-2 rounded' onClick={() => deleteItem(event._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Event;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePopup from './ArticlePopup';

const Art = () => {
    const [data, setData] = useState([]);
    const [editableRows, setEditableRows] = useState({});
    const [editedItemData, setEditedItemData] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const BaseUrl = "http://102.211.210.43/api"


    const fetchData = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/article`);
            setData(res.data.articles);
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = async (index) => {
        try {
            if (editedItemData._id) {
                const res = await axios.put(`${BaseUrl}/article/${editedItemData._id}`, editedItemData);
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
            const res = await axios.delete(`${BaseUrl}/article/${id}`);
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

    const handleInputChange = (e, key) => {
        const value = e.target.value;
        setEditedItemData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleFileInputChange = (e, key) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedItemData(prevData => ({
                ...prevData,
                [key]: reader.result
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedItemData(prevData => ({
                ...prevData,
                photo: reader.result
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
            <button className="bg-[#1f212d] float-right text-[#e0ded2] px-4 py-2 rounded mb-4" onClick={togglePopup}>Add New Article</button>
            {showPopup && (
                <ArticlePopup togglePopup={togglePopup} fetchData={fetchData} />
            )}

            <table className='mt-24 w-full table-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 border border-[#1f212d]'>Title</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Photo</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Submission Date</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Description</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Content</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>On Front</th>
                        <th className='px-4 py-2 border border-[#1f212d]'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice().reverse().map((article, index) => (
                        <tr key={article._id}>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ? <input type="text" value={editedItemData.title || article.title} onChange={(e) => handleInputChange(e, 'title')} /> : article.title}
                            </td>
                            <td className='min-w-[100px] max-w-[100px] px-4 py-2 border border-[#1f212d]' onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index)}>
                                {editableRows[index] ?
                                    <input type="file" onChange={(e) => handleFileInputChange(e, 'photo')} /> :
                                    <img src={article.photo} alt={article.title} className='w-16 h-16 object-cover' />
                                }
                            </td>

                            <td className='min-w-[120px] max-w-[120px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ?
                                    <input type="text" value={formatDate(editedItemData.submissionDate || article.submissionDate)} onChange={(e) => handleInputChange(e, 'submissionDate')} /> :
                                    formatDate(article.submissionDate)
                                }
                            </td>
                            <td className='min-w-[200px] max-w-[250px] px-4 py-2 border border-[#1f212d] white-space: pre-line'>
                                {editableRows[index] ? <textarea rows="4" cols="50" value={editedItemData.description || article.description} onChange={(e) => handleInputChange(e, 'description')} /> : (article.description.length > 50 ? article.description.substring(0, 50) + '...' : article.description)}
                            </td>
                            <td className='min-w-[200px] max-w-[200px] px-4 py-2 border border-[#1f212d] white-space: pre-line'>
                                {editableRows[index] ? <textarea rows="4" cols="50" value={editedItemData.content || article.content} onChange={(e) => handleInputChange(e, 'content')} /> : (article.content.length > 50 ? article.content.substring(0, 50) + '...' : article.content)}
                            </td>
                            <td className='min-w-[50px] max-w-[50px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ?
                                    <input type="checkbox" checked={editedItemData.onFront || article.onFront} onChange={(e) => handleInputChange(e, 'onFront')} /> :
                                    (article.onFront ? 'Yes' : 'No')
                                }
                            </td>
                            <td className='max-w-[140px] min-w-[140px] px-4 py-2 border border-[#1f212d]'>
                                {editableRows[index] ? <button className='mr-2 bg-[#2ea3dd] text-[#e0ded2] px-4 py-2 rounded' onClick={() => handleSave(index)}>Save</button> : <button className='mr-2 bg-[#2ea3dd] text-[#e0ded2] px-4 py-2 rounded' onClick={() => handleEdit(index, article)}>Edit</button>}
                                <button className='bg-[#1f212d] text-[#e0ded2] px-4 py-2 rounded' onClick={() => deleteItem(article._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Art;

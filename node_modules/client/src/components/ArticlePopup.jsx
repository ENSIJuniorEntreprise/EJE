import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from './../api/axios'; 


const ArticlePopup = ({ togglePopup, fetchData }) => {

    const [newArticleData, setNewArticleData] = useState({
        title: '',
        photo: '',
        submissionDate: '',
        description: '',
        content: '',
        onFront: false
    });

    const handleNewArticleInputChange = (e, key) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewArticleData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewArticleData(prevData => ({
                    ...prevData,
                    photo: reader.result // Set the photo to base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const addNewArticle = async () => {
        try {
            const currentDate = new Date().toISOString().split('T')[0];
            const articleDataWithDate = { ...newArticleData, submissionDate: currentDate };

            const res = await axios.post(`${BaseUrl}/article`, articleDataWithDate);
            console.log("New article added:", res.data);
            togglePopup();
            fetchData();
            setNewArticleData({
                title: '',
                photo: '',
                description: '',
                content: '',
                onFront: false
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" w-[700px] h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-8 rounded-lg max-h-[80vh] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Add New Article</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input type="text" id="title" value={newArticleData.title} onChange={(e) => handleNewArticleInputChange(e, 'title')} className="mt-1 block w-full border-gray-300 rounded-md" />
                </div>
                <div className="mb-4" onDrop={handleFileDrop} onDragOver={handleDragOver}>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo:</label>
                    <input type="file" id="photo" onChange={handleFileInputChange} className="hidden" />
                    <label htmlFor="photo" className="border border-dashed border-gray-400 p-4 rounded-md cursor-pointer block">
                        {newArticleData.photo ? 
                            <img src={newArticleData.photo} alt="Uploaded" className="w-full h-auto mb-2" /> :
                            "Drag & Drop or Click to Upload"
                        }
                    </label>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea id="description" value={newArticleData.description} onChange={(e) => handleNewArticleInputChange(e, 'description')} className="resize-none mt-1 block w-full border-gray-300 rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                    <textarea id="content" value={newArticleData.content} onChange={(e) => handleNewArticleInputChange(e, 'content')} className="resize-none mt-1 block w-full border-gray-300 rounded-md"></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-dark-blue px-4 py-2 rounded mr-2" onClick={addNewArticle}>Add</button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={togglePopup}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ArticlePopup;

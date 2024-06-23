import React, { useState } from 'react';
import axios from 'axios';

const EventPop = ({ togglePopup, fetchData }) => {
  const [newEventData, setNewEventData] = useState({
    title: '',
    description: '',
    photos: ['', ''],
    date: '',
    subTitles: ['', ''],
    paragraphs: ['', ''],
    newest: false
  });


  const handleNewEventInputChange = (e, key, index) => {
    if (key === 'subTitles') {
      const value = e.target.value;
      setNewEventData(prevData => ({
        ...prevData,
        subTitles: prevData.subTitles.map((subTitle, i) => i === index ? value : subTitle)
      }));
    } else if (key === 'paragraphs') {
      const value = e.target.value;
      setNewEventData(prevData => ({
        ...prevData,
        paragraphs: prevData.paragraphs.map((paragraph, i) => i === index ? value : paragraph)
      }));
    } else if (key === 'newest') {
      const checked = e.target.checked;
      setNewEventData(prevData => ({
        ...prevData,
        newest: checked // Set the value directly as a boolean
      }));
    } else {
      const value = e.target.value;
      setNewEventData(prevData => ({
        ...prevData,
        [key]: value
      }));
    }
  };
  

  const handleFileInputChange = (e, index) => {
    const file = e.target.files[0];
    handleFile(file, index);
  };

  const handleFileDrop = (e, index) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file, index);
  };

  const handleFile = (file, index) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEventData(prevData => ({
          ...prevData,
          photos: prevData.photos.map((photo, photoIndex) => photoIndex === index ? reader.result : photo)
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const addNewEvent = async () => {
    try {
      const currentDate = new Date().toISOString().split('T')[0];
      const eventDataWithDate = { ...newEventData, date: currentDate };

      const res = await axios.post("https://ej-ebackend.vercel.app/event", eventDataWithDate);
      console.log("New event added:", res.data);
      togglePopup();
      fetchData();
      setNewEventData({
        title: '',
        description: '',
        photos: ['', ''],
        subTitles: ['', ''],
        paragraphs: ['', ''],
        newest: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto">
    <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
      <input type="text" id="title" value={newEventData.title} onChange={(e) => handleNewEventInputChange(e, 'title')} className="mt-1 block w-full border-gray-300 rounded-md" />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
      <input type="text" id="description" value={newEventData.description} onChange={(e) => handleNewEventInputChange(e, 'description')} className="mt-1 block w-full border-gray-300 rounded-md" />
    </div>
    <div className="mb-4">
      {newEventData.photos.map((photo, index) => (
        <div key={index} onDrop={(e) => handleFileDrop(e, index)} onDragOver={handleDragOver}>
          <label htmlFor={`photo${index}`} className="block text-sm font-medium text-gray-700">Photo {index + 1}:</label>
          <input type="file" id={`photo${index}`} onChange={(e) => handleFileInputChange(e, index)} className="hidden" />
          <label htmlFor={`photo${index}`} className="border border-dashed border-gray-400 p-4 rounded-md cursor-pointer block">
            {photo ?
              <img src={photo} alt={`Uploaded ${index + 1}`} className="w-full h-auto mb-2" /> :
              "Drag & Drop or Click to Upload"
            }
          </label>
        </div>
      ))}
    </div>
    <div className="mb-4">
      {newEventData.subTitles.map((subtitle, index) => (
        <div key={index}>
          <label htmlFor={`subtitle${index}`} className="block text-sm font-medium text-gray-700">Subtitle {index + 1}:</label>
          <input type="text" id={`subtitle${index}`} value={subtitle} onChange={(e) => handleNewEventInputChange(e, 'subTitles', index)} className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>
      ))}
    </div>
    <div className="mb-4">
      {newEventData.paragraphs.map((paragraph, index) => (
        <div key={index}>
          <label htmlFor={`paragraph${index}`} className="block text-sm font-medium text-gray-700">Paragraph {index + 1}:</label>
          <textarea id={`paragraph${index}`} value={paragraph} onChange={(e) => handleNewEventInputChange(e, 'paragraphs', index)} className="resize-none mt-1 block w-full border-gray-300 rounded-md"></textarea>
        </div>
      ))}
    </div>
    <div className="mb-4">
      <label htmlFor="newest" className="block text-sm font-medium text-gray-700">Newest:</label>
      <input type="checkbox" id="newest" checked={newEventData.newest} onChange={(e) => handleNewEventInputChange(e, 'newest')} className="mt-1" />
    </div>
    <div className="flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={addNewEvent}>Add</button>
      <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={togglePopup}>Cancel</button>
    </div>
  </div>
</div>

  )
}

export default EventPop;

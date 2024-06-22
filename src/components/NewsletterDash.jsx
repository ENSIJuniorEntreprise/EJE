import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const NewsletterDash = () => {
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { subject, text };

        try {
            const response = await axios.post('http://localhost:8000/subscriber/send', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Email sent successfully');
                setSubject('');
                setText('');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="px-20  py-44 bg-[#e0ded2] text-[#1f212d] flex flex-col items-center">

            <form onSubmit={handleSubmit} className='w-96'>
                <h2 className="text-2xl mb-4 text-left">Newsletter</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject:</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">Text:</label>
                    <textarea
                        className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="bg-[#1f212d] text-[#e0ded2] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default NewsletterDash;

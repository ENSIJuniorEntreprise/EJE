import React, { useState } from 'react';
import equipe from '/assets/team.png';
import { BaseUrl } from '../api/axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setError('Please specify the email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      const response = await fetch(`${BaseUrl}/subscriber`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Subscription successful!');
        setError('');
        setEmail('');
      } else {
        setError(data.error || 'An error occurred.');
        setSuccess('');
      }
    } catch (error) {
      setError('Internal server error.');
      setSuccess('');
    }
  };

  return (
    <div className="relative">
      <img src={equipe} alt="Background" className="xxs:h-60 mmmxs:h-70 md:h-75 w-full lg:h-[250px] dxl:h-[300px] object-cover" />
      <div className="xxs:p-3 xxs:pt-9 xxxs:pt-[60px] xs:px-5 dxl:pt-[90px] absolute inset-0 bg-[#1f2029] bg-opacity-[0.7] p-20">
        <h1 className="text-beige font-bold tracking-wider text-3xl md:text-4xl sm:text-3xl dxl:text-4xl text-center">
          Subscribe to our Newsletter!
        </h1>
        <form onSubmit={handleSubmit} className="mmxs:px-10 mxs:px-20 sm:px-30 lg:px-40 xl:px-[250px] dxl:px-[300px] mb-2 mt-8 inset-0 flex xxs:flex xxs:justify-center xxs:items-center">
          <input
            type="email"
            className="xxs:h-11 xs:h-10 mmmxs:h-12 p-2 text-sm h-16 bg-[#F1EFE2] rounded-l border border-solid flex items-center justify-center w-4/6 md:w-3/6"
            aria-describedby="button-addon3"
            placeholder='Enter your Email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ opacity: 0.8 }}
          />
          <button
            className="xxs:h-11 xs:h-10 mmmxs:h-12 rounded-tr-[25px] h-16 bg-[#1F2029] text-beige px-6 py-2 xxs:text-md md:text-xl font-semibold md:w-1/6 w-2/6"
            type="submit"
            id="button-addon3"
            style={{ opacity: 0.95 }}
          >
            Join
          </button>
        </form>
        {error && <p className="text-[#FF0000] text-center">{error}</p>}
        {success && <p className="text-[#23DC3D] text-center">{success}</p>}
      </div>
    </div>
  );
}

export default Newsletter;

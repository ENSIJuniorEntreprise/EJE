import React, { useState, useEffect } from "react";
import "./Loader.css"; 
import logo from "/assets/logo.png";

const Loader = () => {
  const [slogan, setSlogan] = useState("");
  const [finishedTyping, setFinishedTyping] = useState(false);

  useEffect(() => {
    const sloganText = "Always Striving For Greatness";
    let index = 0;
    const interval = setInterval(() => {
      if (index <= sloganText.length) {
        setSlogan(sloganText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setFinishedTyping(true); // Set to true when typing is finished
      }
    }, 70); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className={`loader-container2  ${finishedTyping ? 'dark-blue-gradient1 loaded' : ''}`}>
        <div className="loader">
          <img src={logo} alt="logo" />
        </div>
        <div className={`slog ${finishedTyping ? 'shine' : ''}`}>{slogan}</div>
      </div>
    </div>    
  );
};

export default Loader;

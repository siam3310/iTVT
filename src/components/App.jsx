"use client";

import React, { useState, useEffect } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import Popup from '../components/Popup';
import Navbar from '../components/Navbar';
import VideoBox from '../components/VideoBox';
import Channels from '../components/Channels';

const App = ({ initialHasVisited }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!initialHasVisited) {
      setShowPopup(true);
      document.cookie = "hasVisited=true; max-age=" + 7 * 24 * 60 * 60;
    }
    const saveIpAddress = async () => {
        try {
          const response = await fetch('/api/saveip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ someOtherData: 'example' }),
          });
  
          if (!response.ok) {
            throw new Error('Failed to save IP address');
          }
  
          const data = await response.json();
          console.log(data.message);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      saveIpAddress();
  }, [initialHasVisited]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <NextUIProvider>
      <div className="App">
        {showPopup && <Popup onClose={handleClosePopup} />}
        <Navbar />
        <VideoBox name="iTVT - Watch Broadcast" src="http://video-itv.itvt.xyz/live/itvt/index.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

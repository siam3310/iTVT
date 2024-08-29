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
  }, [initialHasVisited]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <NextUIProvider>
      <div className="App">
        {showPopup && <Popup onClose={handleClosePopup} />}
        <Navbar />
        <VideoBox name="iTVT - Watch Broadcast" src="https://video-itv.itvt.xyz/live/itvt/index.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

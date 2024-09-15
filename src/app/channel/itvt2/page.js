"use client";

import React, { useState, useEffect, useRef } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import getLangKey from '@/components/server/getLangKey';
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import VideoBox from '@/components/VideoBox';
import Channels from '@/components/Channels';

const App = () => {
  const appRef = useRef();
  const [unavailableTxt, setUnavailableTxt] = useState('...');

  useEffect(() => {
    getLangKey("pages.player.unavailable").then((txt) => {
      setUnavailableTxt(txt);
      appRef.current.classList.remove("no-clickable", "stop-drag");
    });
  }, []);

  return (
    <NextUIProvider>
      <FirstLoadPopup />
      <div className="App no-clickable stop-drag" ref={appRef}>
        <Navbar />
        <VideoBox name={`iTVT Now (${unavailableTxt})`} src="https://video-itv.itvt.xyz/live/itvt2.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;
"use client";

import React, { useEffect, useRef } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import VideoBox from '@/components/VideoBox';
import Channels from '@/components/Channels';

const App = () => {
  let appRef = useRef();
  useEffect(() => {
      appRef.current.classList.remove("no-clickable", "stop-drag")
  }, []);

  return (
    <NextUIProvider>
      <FirstLoadPopup />
      <div className="App no-clickable stop-drag" ref={appRef}>
        <Navbar />
        <VideoBox name="iTVT Now (Unavalaible)" src="https://video-itv.itvt.xyz/live/itvt2.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

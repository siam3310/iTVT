'use client';

import React, { use, useRef, Suspense, useEffect } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import VideoBox from '@/components/VideoBox';
import Channels from '@/components/Channels';

// Assuming getLangData is available for fetching the language data
import getLangData from '@/components/client/getLangData';

// Function to fetch player text
async function getPlayerText() {
  const lang = await getLangData();
  return lang.pages.player.watch_broadcast;
}

const Page = () => {
  const appRef = useRef();
  const playerText = use(getPlayerText());

  useEffect(() => {
    appRef.current.classList.remove("no-clickable", "stop-drag")
  }, []);

  return (
    <NextUIProvider>
      <FirstLoadPopup />
      <div className="App no-clickable stop-drag" ref={appRef}>
        <Navbar />
        <VideoBox name={`iTVT (${playerText})`} src="https://video-itv.itvt.xyz/live/itvt/index.m3u8" />
        <Channels />
      </div>
    </NextUIProvider>
  );
};

export default Page;

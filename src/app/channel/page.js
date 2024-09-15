"use client";

import React, { useEffect, useRef } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import Channels from '@/components/Channels';

const Page = () => {
  let appRef = useRef();
  useEffect(() => {
      appRef.current.classList.remove("no-clickable", "stop-drag")
  }, []);

  return (
    <NextUIProvider>
      <FirstLoadPopup />
      <div className="App no-clickable stop-drag" ref={appRef}>
        <Navbar />
        <h1 className='font-bold text-2xl text-center my-7'>Select Favourite Channel</h1>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default Page;

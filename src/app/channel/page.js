"use client";

import React, { useState, useEffect, useRef } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import getLangKey from '@/components/server/getLangKey';
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import Channels from '@/components/Channels';

const Page = () => {
  const appRef = useRef();
  const [selectTxt, setSelectTxt] = useState('...');

  useEffect(() => {
    getLangKey("pages.channel").then((txt) => {
      setSelectTxt(txt);
      appRef.current.classList.remove("no-clickable", "stop-drag");
    });
  }, []);

  return (
    <NextUIProvider>
      <FirstLoadPopup />
      <div className="App no-clickable stop-drag" ref={appRef}>
        <Navbar />
        <h1 className='font-bold text-2xl text-center my-7'>{selectTxt}</h1>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default Page;

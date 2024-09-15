"use client"

import React, { useEffect, useRef } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';
import ContactBox from "@/components/ContactBox";

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
                <h2 className="text-center font-bold text-3xl mt-8">Contact us</h2>
                <div className="flex flex-col justify-center items-center" id="Contact">
                    <ContactBox team="Redakcja" email="redakcja@itvt.xyz" />
                    <ContactBox team="Reklamy" email="ads@itvt.xyz" />
                    <ContactBox team="IT News" email="itnews@itvt.xyz" />
                </div>

            </div>
        </NextUIProvider>
    );
};
export default App;

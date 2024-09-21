"use client"

import React, { use, useEffect, useRef } from 'react';
import { NextUIProvider, Button } from "@nextui-org/react";
import Link from 'next/link';
import getLangData from '@/components/client/getLangData';
import FirstLoadPopup from '@/components/FirstLoadPopup';
import Navbar from '@/components/Navbar';

async function getInfoText(){
    const lang = await getLangData();
    return lang.pages.watch;
}

const App = () => {
    const appRef = useRef();
    const infoText = use(getInfoText());

    useEffect(() => {
        appRef.current.classList.remove("no-clickable", "stop-drag")
    }, []);

    return (
        <NextUIProvider>
            <FirstLoadPopup />
            <div className="App no-clickable stop-drag" ref={appRef}>
                <Navbar />
                <h2 className="text-center font-bold text-3xl mt-8">{infoText.how_to_watch}</h2>
                <div className="flex flex-col justify-center items-center" id="Watch">
                    <h4 className='text-xl mt-5'>{infoText.playlist_m3u}</h4>
                    <p className='mt-2'>{infoText.use_link}: <b class="select">https://hub.itvt.xyz/watch/iTVT.m3u</b></p>
                    <p className='mt-3'>{infoText.also_download}</p>
                    <Link href="/watch/iTVT.m3u" download="iTVT">
                        <Button color="primary" variant="bordered" className='mt-4'>
                            <svg width="64px" height="64px" viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z" fill="#ffffff"></path> </g></svg> 
                            <span className='text-white ml-[-6px] transition-colors'>{infoText.download}</span>
                        </Button>
                    </Link>
                    <p className='mt-3'>{infoText.apps_recommended}</p>
                    <p className='mt-5'><b>PC / {infoText.other_devices}</b></p>
                    <ul className='text-center'>
                        <li>VLC</li>
                        <li>MPV</li>
                        <li>Kodi</li>
                    </ul>
                    <p className='mt-4'><b>Android</b></p>
                    <ul className='text-center'>
                        <li>Televizo</li>
                        <li>IPTV Pro - Alexander Sofronov</li>
                        <li>IPTV - Alexander Sofronov</li>
                    </ul>
                </div>

            </div>
        </NextUIProvider>
    );
};
export default App;

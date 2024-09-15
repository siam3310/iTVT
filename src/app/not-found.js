import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import getLangKey from '@/components/server/getLangKey';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <NextUIProvider>
        <div className="App">
            <Navbar />
            <h2 className='text-center text-xl mt-10 mx-5 sm:mx-4 lg:mx-0'>{getLangKey("pages.404")}</h2>
        </div>
    </NextUIProvider>
  )
}
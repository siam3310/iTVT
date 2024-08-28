import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <NextUIProvider>
        <div className="App">
            <Navbar />
            <h2 className='text-center text-xl mt-10'>The selected page does not exist, select an available option from the menu at the top of the page</h2>
        </div>
    </NextUIProvider>
  )
}
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '@/components/Navbar';
import Channels from '@/components/Channels';

const App = () => {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
        <h1 className='font-bold text-2xl text-center my-7'>Select Favourite Channel</h1>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

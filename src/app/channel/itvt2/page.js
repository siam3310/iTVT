import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '@/components/Navbar';
import VideoBox from '@/components/VideoBox';
import Channels from '@/components/Channels';

const App = () => {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
        <VideoBox name="iTVT Now (Unavalaible)" src="https://video-itv.itvt.xyz/live/itvt2.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

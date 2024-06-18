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
        <VideoBox name="Oliwier Stream 24/7" src="http://83.22.152.168:8080/hls/teststrona/index.m3u8"/>
        <Channels/>
      </div>
    </NextUIProvider>
  );
};

export default App;

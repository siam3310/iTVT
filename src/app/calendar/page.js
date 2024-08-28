"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '@/components/Navbar';
import AccordionBox from '@/components/AccordionBox';

const App = () => {
    const programsToday = [
        { title: "10:00 - 10:30 | Program Name 1", description: "Description program" },
        { title: "10:30 - 12:00 | Program Name 2", description: "Description program" },
        { title: "12:00 - 15:00 | Program Name 3", description: "Description program" },
        { title: "15:00 - 18:30 | Program Name 4", description: "Description program" },
        { title: "19:00 - 19:15 | Program Name 5", description: "Description program" },
        { title: "19:15 - 23:00 | Program Name 6", description: "Description program" },
      ];
      const programsTomorrow = [
        { title: "10:00 - 10:30 | Program Name 1", description: "Description program" },
        { title: "10:30 - 12:00 | Program Name 2", description: "Description program" },
        { title: "12:00 - 15:00 | Program Name 3", description: "Description program" },
        { title: "15:00 - 18:30 | Program Name 4", description: "Description program" },
        { title: "19:00 - 19:15 | Program Name 5", description: "Description program" },
        { title: "19:15 - 23:00 | Program Name 6", description: "Description program" },
      ];

    return (
        <NextUIProvider>
            <div className="App">
                <Navbar />
                <h2 className="text-center font-bold text-3xl">Today</h2>
                <AccordionBox programs={programsToday}/>
                <h2 className="text-center font-bold text-3xl mt-5">Tomorrow</h2>
                <AccordionBox programs={programsTomorrow}/>
            </div>
        </NextUIProvider>
    );
};
export default App;

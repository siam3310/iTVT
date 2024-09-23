"use client";

import React, {use} from "react";
import { NextUIProvider } from "@nextui-org/react";
import getLangData from '@/components/client/getLangData';
import Navbar from '@/components/Navbar';
import AccordionBox from '@/components/AccordionBox';
import Programs from '@/components/client/Programs.js';

async function getCalendarText() {
    const lang = await getLangData();
    return lang.pages.tv_calendar;
}

const App = () => {
    const programsDemoBroadcast = [
        { title: "00:00 - 18:00 | Przerwa techniczna", description: "Brak" },
    ];
    const programsToday = [
        { title: "18:00 - 18:30 | Krótkie wprowadzenie", description: "Jakie będą programy | Plan Dnia" },
        { title: "18:30 - 20:30 | Zagrajmy na luzie z Klubuntu", description: "Program rozwrywkowy" },
    ];
    const programsTomorrow = [
        { title: "10:00 - 10:30 | Program Name", description: "Soon" },
    ];

    const calendarText = use(getCalendarText());

    return (
        <NextUIProvider>
            <div className="App">
                <Navbar />
                <h2 className="text-center font-bold text-3xl mt-2">{calendarText.demo_broadcast}</h2>
                <AccordionBox programs={Programs.programsDemoBroadcast}/>
                <h2 className="text-center font-bold text-3xl mt-5">{calendarText.today}</h2>
                <AccordionBox programs={Programs.programsToday + " (23.09.2024)"}/>
                <h2 className="text-center font-bold text-3xl mt-5">{calendarText.tomorrow}</h2>
                <AccordionBox programs={Programs.programsTomorrow}/>
            </div>
        </NextUIProvider>
    );
};
export default App;

"use client";

import React, {use} from "react";
import { NextUIProvider } from "@nextui-org/react";
import getLangData from '@/components/client/getLangData';
import Navbar from '@/components/Navbar';
import AccordionBox from '@/components/AccordionBox';

async function getCalendarText() {
    const lang = await getLangData();
    return lang.pages.tv_calendar;
}

const App = () => {
    const programsDemoBroadcast = [
        { title: "01:50 - 09:00 | Czas", description: "Jaka jest teraz godzina" },
        { title: "10:00 - 19:30 | Przerwa techniczna", description: "Brak" },
    ];
    const programsToday = [
        { title: "19:30 - 20:00 | Krótkie wprowadzenie", description: "Jakie będą progamy" },
        { title: "20:00 - 22:30 | Zagrajmy na luzie z Klubuntu", description: "Program rozwrywkowy" },
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
                <AccordionBox programs={programsDemoBroadcast}/>
                <h2 className="text-center font-bold text-3xl mt-5">{calendarText.today}</h2>
                <AccordionBox programs={programsToday}/>
                <h2 className="text-center font-bold text-3xl mt-5">{calendarText.tomorrow}</h2>
                <AccordionBox programs={programsTomorrow}/>
            </div>
        </NextUIProvider>
    );
};
export default App;

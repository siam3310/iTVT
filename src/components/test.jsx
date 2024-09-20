"use client";


const AppContainer = ({ appRef, langData }) => {
    appRef.current.classList.remove("no-clickable", "stop-drag");
  };

export default AppContainer;
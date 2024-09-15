"use client"

import React, { useState, useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";
import getLangKey from "./server/getLangKey.js";
import {Logo} from "./Logo.jsx";

export default function () {
  const [tvCalendarTxt, setTvCalendarTxt] = useState('...');
  const [channelsTxt, setChannelsTxt] = useState('...');
  const [privacyPolicyTxt, setPrivacyPolicyTxt] = useState('...');
  const [contactTxt, setContactTxt] = useState('...');

  useEffect(() => {
    getLangKey("navbar.tv_calendar").then((txt) => {
      setTvCalendarTxt(txt);
    });
    getLangKey("navbar.channels").then((txt) => {
      setChannelsTxt(txt);
    });
    getLangKey("navbar.privacy_policy").then((txt) => {
      setPrivacyPolicyTxt(txt);
    });
    getLangKey("navbar.contact").then((txt) => {
      setContactTxt(txt);
    });
  }, []);

  return (
    <Navbar className="m-4 bg-zinc-800 rounded-md w-vw-header">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Logo />
          <p className="font-bold text-inherit">Hub</p>
        </Link>

      </NavbarBrand>

      {/* Mobile Layout */}
      <NavbarContent className="flex sm:hidden gap-4 relative top-[2.5px]" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/calendar">
            <Image src="/static/icons/calendar.svg" width={30}></Image>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/channel">
            <Image src="/static/icons/channels.svg" width={30}></Image>
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/privacy">
            <Image src="/static/icons/info.svg" width={30}></Image>
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/contact" aria-current="page">
            <Image src="/static/icons/email.svg" width={30}></Image>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Layout */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/calendar">
            {tvCalendarTxt}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/channel">
            {channelsTxt}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/privacy">
            {privacyPolicyTxt}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" aria-current="page">
            {contactTxt}
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

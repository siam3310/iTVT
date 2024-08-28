import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";

export default function () {
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
          <Link color="foreground" href="/privacy" aria-current="page">
            <Image src="/static/icons/info.svg" width={30}></Image>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Layout */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/calendar">
            TV Calendar
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/channel">
            Channels
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/privacy">
            Privacy Policy
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" aria-current="page">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

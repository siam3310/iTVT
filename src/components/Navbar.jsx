import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";

export default function () {
  return (
    <Navbar className="m-4 bg-zinc-800 rounded-md">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Logo />
          <p className="font-bold text-inherit">Hub</p>
        </Link>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/channel">
            Channels
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/privacy" aria-current="page">
            Privacy Policy
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

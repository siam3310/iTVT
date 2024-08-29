"use client"

import React from "react";
// import Link from 'next/link'
import Image from "next/image";

export const Logo = () => (
  <Image 
    src="/static/img/logo.png"
    width={42} 
    height={42} 
    style={{ width: "auto" }}
    className="mx-2" 
    alt="iTVT Home"/>
);

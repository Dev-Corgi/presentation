"use client";
import React, { useState, useEffect } from "react";
import CorgiLoader from "./CorgiUI/CorgiLoader";
import Gallary from "./pages/Gallary";
import Dictionary1 from "./pages/Dictionary";
import ScrollPage from "./pages/ScrollPage";
export default function Home() {

  return (
    <CorgiLoader>
      <img className="absolute w-full h-[100vh]" src = "/images/endimage3.jpg"></img>
     <ScrollPage></ScrollPage>
     <Gallary></Gallary>
     <Dictionary1></Dictionary1>
    </CorgiLoader>
  );
}

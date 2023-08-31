"use client"
import React,{useState,useEffect} from 'react';
// import Image from 'next/image'
import Dictionary1 from './pages/Dictionary1/page'
// import Gallary from './pages/Gallary/page'
// import ScrollPage from './pages/ScrollPage/page'
// import ScrollPage from './pages/ScrollPage/page'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  return (

    <>
    {isLoading ? null :    <Dictionary1></Dictionary1>
      //  <Dictionary2></Dictionary2>
      //  <Gallary></Gallary>
      // <ScrollPage></ScrollPage>
    } 
  </>

  )
}

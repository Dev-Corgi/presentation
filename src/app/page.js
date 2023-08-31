"use client"
import React,{useState,useEffect} from 'react';
import Dictionary1 from './pages/Dictionary1/page'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  return (

    <>
    {isLoading ? null :    <Dictionary1></Dictionary1>} 
  </>
  )
}

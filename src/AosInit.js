
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])

  return null
}
import React from "react";

export const useScreenWidth = () => {
  const [isScreenWidth, setIsScreenWidth] = React.useState(true);
  
   React.useEffect(() => {
    function checkScreenWidth() {
      setIsScreenWidth(window.innerWidth > 768)
    }
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  return {
    isScreenWidth,
  }
}
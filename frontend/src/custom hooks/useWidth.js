import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return width;
};

export default useWidth;

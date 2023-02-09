import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Images from "./images.json";

export default function ImageSlider() {
  const [index, setIndex] = useState<number[]>([0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => {
        return prevIndex.map((val) => {
          if (val >= Images.length - 1) return 0;
          return val + 1;
        });
      });
    }, 6000);
    return () => clearTimeout(timer);
  }, [index]);

  const handleImage = () => {
    return (
      <div className="flex justify-center w-full">
        {Images.map((val, key) => {
          if (key === index[1])
            return (
              <motion.img
                key={key}
                src={val.src}
                className="w-2/5 h-96"
                animate={{
                  position: "absolute",
                  x: ["-40vw", "0vw"],
                  opacity: [0, 1],
                  transition: {
                    duration: 1,
                  },
                }}
              />
            );
          if (key === index[0])
            return (
              <motion.img
                key={key}
                src={val.src}
                className="w-2/5 h-96"
                animate={{
                  x: ["0vw", "40vw"],
                  opacity: [1, 0],
                  transition: {
                    duration: 1,
                  },
                }}
              />
            );
        })}
      </div>
    );
  };

  return <div className="flex justify-center pt-8">{handleImage()}</div>;
}

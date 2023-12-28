import { useState } from "react";

export const caraouselHook = (arrayLenght: number) => {
  
  const [position, setPosition] = useState<number>(0);

  const clickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(arrayLenght - 1);
    }
  };

  const clickNext = () => {
    if (position < arrayLenght - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  return { position, clickNext, clickPrev };
};
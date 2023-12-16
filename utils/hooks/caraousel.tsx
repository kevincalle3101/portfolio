import { useState } from "react";

export const useCaroussel = (arr: any[] = []) => {
  const [position, setPosition] = useState<number>(0);

  const onClickNext = () => {
    if (position < arr.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(arr.length - 1);
    }
  };

  return { position, onClickNext, onClickPrev };
};
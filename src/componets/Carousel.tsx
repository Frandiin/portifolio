import { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

interface dataProps {
  id: string;
  image: string;
}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export const Carousel = () => {
  const [dado, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/data/data.json")
      .then((response) => response.json())
      .then((valor: dataProps[]) => {
        setData(valor);
      });
  }, []);

  return (
    <>
      <div>
        <AutoPlaySwipeableViews enableMouseEvents>
          {dado.map((items) => (
            <div
              className="flex justify-center items-center text-center"
              key={items.id}
            >
              <img className=" h-[200px] w-[200px]" src={items.image} />
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </>
  );
};

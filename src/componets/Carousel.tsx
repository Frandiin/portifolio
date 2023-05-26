import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CarouselMock } from "./Mock";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export const Carousel = () => {
  return (
    <>
      <div>
        <AutoPlaySwipeableViews enableMouseEvents>
          {CarouselMock.map((items) => (
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

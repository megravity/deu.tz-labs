import { forwardRef } from "react";
import type { CardData } from "../../types/types";

export interface Props {
  cardData: CardData;
}

const ExperimentBox = forwardRef<HTMLDivElement, Props>(({ cardData }, ref) => {
  return (
    <div
      ref={ref} // This is where the ref goes
      id={cardData.id}
      className="card-3d-shadow relative flex aspect-square h-36 translate-3d rotate-x-[10deg] rotate-y-[7deg] rotate-z-[5deg] transform-gpu flex-col justify-between rounded-md px-3 py-8 backdrop-blur-[500px] text-shadow-[1px_1px_black,_-1px_-1px_black]"
    >
      <h3 className="text-xl">{cardData.title}</h3>
    </div>
  );
});

export default ExperimentBox;

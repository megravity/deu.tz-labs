import type { CardData } from "../../types/types";

export interface Props {
  cardData: CardData;
}

export default function ExperimentBox(props: Props) {
  const { cardData } = props;
  return (
    <div
      id={cardData.id}
      className="card-3d-shadow text-shadow-[1px 1px black, -1px -1px black] relative flex aspect-square h-36 translate-3d rotate-x-10 rotate-y-7 rotate-z-5 transform-gpu flex-col justify-between rounded-md px-3 py-8 backdrop-blur-3xl transform-3d"
    >
      <h3 className="text-xl">{cardData.title}</h3>
    </div>
  );
}

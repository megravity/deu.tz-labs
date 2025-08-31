import type { CardData } from "../../types/types";

export interface Props {
  cardData: CardData;
}

export default function ExperimentBox(props: Props) {
  const { cardData } = props;
  return (
    <div
      id={cardData.id}
      className="text-background relative flex aspect-square h-64 flex-col justify-between rounded-md bg-white px-3 py-8 outline-2 outline-white"
    >
      <p className="bg-highlight absolute -top-3 -left-3 rounded-sm px-2 py-1 text-white">
        {cardData.framework}
      </p>
      <h3 className="text-xl">{cardData.title}</h3>
      <div className="font-sans-thin flex justify-between text-2xl">
        <a href={cardData.url}>Live</a>
        <a href={cardData.sourceRepo}>Code</a>
      </div>
    </div>
  );
}

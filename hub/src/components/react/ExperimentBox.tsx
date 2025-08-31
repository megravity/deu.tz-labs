import type { CardData } from "../../types/types";

export interface Props {
  cardData: CardData;
}

export default function ExperimentBox(props: Props) {
  const { cardData } = props;
  return (
    <div
      id={cardData.id}
      className="card-3d-shadow text-background relative flex aspect-square h-45 translate-3d rotate-x-10 rotate-y-7 rotate-z-5 transform-gpu flex-col justify-between rounded-md bg-white px-3 py-8 transform-3d"
    >
      <h3 className="text-xl">{cardData.title}</h3>
      <div className="font-sans-thin flex justify-between text-2xl">
        <a
          href={cardData.url}
          className="underline decoration-zinc-700 underline-offset-1"
        >
          Live
        </a>
        <a href={cardData.sourceRepo} className="underline underline-offset-1">
          Code
        </a>
      </div>
    </div>
  );
}

import { experiments } from "../../../public/mock-manifest.json";
import type { CardData } from "../../types/types";
import ExperimentBox from "./ExperimentBox";

export default function Experiments() {
  return (
    <div className="mt-14 flex justify-center gap-8 perspective-midrange transform-3d">
      {(experiments as CardData[]).map((exp: CardData) => {
        return <ExperimentBox key={exp.id} cardData={exp} />;
      })}
    </div>
  );
}

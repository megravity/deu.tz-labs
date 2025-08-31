import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { experiments } from "../../../public/mock-manifest.json";
import type { CardData } from "../../types/types";
import ExperimentBox from "./ExperimentBox";

gsap.registerPlugin(useGSAP);

export default function Experiments() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Updated to allow null in array
  useGSAP(
    () => {
      for (const ref of cardRefs.current) {
        const yPos = Math.min(200, Math.random() * 800);
        gsap.set(ref, { y: yPos });
      }
      // GSAP can access all cards
      const cards = cardRefs.current.filter((ref) => {
        ref !== null;
        return ref;
      });
      gsap.fromTo(cards, { translateX: 0 }, { translateX: 360, stagger: 0.1 });
    },
    { scope: cardRefs }
  );

  return (
    <div className="mt-14 flex justify-center gap-8 perspective-midrange transform-3d">
      {(experiments as CardData[]).map((exp: CardData, index: number) => {
        return (
          <ExperimentBox
            key={exp.id}
            cardData={exp}
            ref={(el) => {
              cardRefs.current[index] = el; // This returns void
            }}
          />
        );
      })}
    </div>
  );
}

export interface CardData {
  id: string;
  title: string;
  description?: string;
  framework: string;
  status?: string;
  deploymentType: string;
  url: string;
  sourceRepo: string;
}

declare module "../../public/mock-manifest.json" {
  export const experiments: CardData[];
}

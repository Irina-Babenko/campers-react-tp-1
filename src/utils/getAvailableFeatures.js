import { FEATURES } from "./features";

export function getAvailableFeatures(camper) {
  return Object.keys(FEATURES)
    .filter((key) => camper[key])
    .map((key) => FEATURES[key]);
}

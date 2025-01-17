import { FEATURES } from "./features";

export function getAvailableFeatures(camper) {
  return Object.keys(FEATURES)
    .filter((key) => camper[key])
    .map((key) => {
      const feature = FEATURES[key];
      return typeof feature === "function" ? feature(camper[key]) : feature;
    });
}

import FuelPump from "../components/ui/icons/FuelPump";
import Diagram from "../components/ui/icons/Diagram";
import Wind from "../components/ui/icons/Wind";
import Bathroom from "../components/ui/icons/Bathroom";
import CupHot from "../components/ui/icons/CupHot";
import Tv from "../components/ui/icons/Tv";
import Radios from "../components/ui/icons/Radios";
import Refrigerator from "../components/ui/icons/Refrigerator";
import Microwave from "../components/ui/icons/Microwave";
import Gas from "../components/ui/icons/Gas";
import Water from "../components/ui/icons/Water";

export const FEATURES = {
  engine: (type) => ({
    label: type.charAt(0).toUpperCase() + type.slice(1),
    Icon: FuelPump,
  }),
  transmission: (type) => ({
    label: type.charAt(0).toUpperCase() + type.slice(1),
    Icon: Diagram,
  }),
  AC: { label: "AC", Icon: Wind },
  bathroom: { label: "Bathroom", Icon: Bathroom },
  kitchen: { label: "Kitchen", Icon: CupHot },
  TV: { label: "TV", Icon: Tv },
  radio: { label: "Radio", Icon: Radios },
  refrigerator: { label: "Refrigerator", Icon: Refrigerator },
  microwave: { label: "Microwave", Icon: Microwave },
  gas: { label: "Gas", Icon: Gas },
  water: { label: "Water", Icon: Water },
};

export const VEHICLE_DETAILS = {
  form: "Form",
  length: "Length",
  width: "Width",
  height: "Height",
  tank: "Tank Capacity",
  consumption: "Fuel Consumption",
};

export function getVehicleDetails(camper) {
  return Object.keys(VEHICLE_DETAILS)
    .filter((key) => camper[key])
    .map((key) => ({
      label: VEHICLE_DETAILS[key],
      value:
        key === "form"
          ? camper[key].charAt(0).toUpperCase() + camper[key].slice(1)
          : camper[key].replace(/(\d+)([a-zA-Z]+)/, "$1\u00A0$2"),
    }));
}

import { getAvailableFeatures } from "../../utils/getAvailableFeatures";
import { getVehicleDetails } from "../../utils/vehicleDetailsUtils";
import css from "./DetailsFeatures.module.css";

function DetailsFeatures({ camper }) {
  const features = getAvailableFeatures(camper);
  const vehicleDetails = getVehicleDetails(camper);

  return (
    <div className={css.featuresContainer}>
      <ul className={css.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={css.featureItem}>
            <feature.Icon size={20} />
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      <h2 className={css.titleVehicle}>Vehicle details</h2>
      <ul className={css.vehicleDetailsList}>
        {vehicleDetails.map((detail, index) => (
          <li key={index} className={css.vehicleDetailItem}>
            <strong>{detail.label}:</strong> {detail.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailsFeatures;

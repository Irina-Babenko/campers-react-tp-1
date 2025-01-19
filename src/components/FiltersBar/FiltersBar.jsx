import { FEATURES } from "../../utils/features";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice";
import Button from "../ui/Button/Button";
import FuelPump from "../ui/icons/FuelPump";
import BiGrid from "../ui/icons/BiGrid";
import FourGrid from "../ui/icons/FourGrid";
import MoreGrid from "../ui/icons/MoreGrid";
import css from "./FiltersBar.module.css";

export default function Filters() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    AC: false,
    engine: false,
    bathroom: false,
    kitchen: false,
    TV: false,
  });

  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  const handleFilterSelection = (filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleVehicleTypeSelection = (type) => {
    setSelectedVehicleType((prev) => (prev === type ? "" : type));
  };

  const handleFilter = () => {
    const filters = {
      location,
      AC: selectedFilters.AC,
      engine: "automatic",
      bathroom: selectedFilters.bathroom,
      kitchen: selectedFilters.kitchen,
      TV: selectedFilters.TV,
      vehicleType: selectedVehicleType,
    };

    dispatch(fetchCampers(filters));
  };

  return (
    <div className={css.filters}>
      <div className={css.locationtitle}>Location</div>

      <div className={css.locationFilter}>
        <input
          type="text"
          placeholder=""
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={css.locationInput}
        />
      </div>
      <div className={css.filterstitle}>Filters</div>
      <div className={css.title}>Vehicle equipment</div>

      <div className={css.buttonsContainer}>
        <div
          className={`${css.filterButton} ${
            selectedFilters.AC ? css.selected : ""
          }`}
          onClick={() => handleFilterSelection("AC")}
        >
          <FEATURES.AC.Icon size={20} className={css.icon} />
          <div className={css.label}>{FEATURES.AC.label}</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedFilters.engine ? css.selected : ""
          }`}
          onClick={() => handleFilterSelection("engine")}
        >
          <FuelPump size={20} className={css.icon} />
          <div className={css.label}>Automatic</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedFilters.bathroom ? css.selected : ""
          }`}
          onClick={() => handleFilterSelection("bathroom")}
        >
          <FEATURES.bathroom.Icon size={20} className={css.icon} />
          <div className={css.label}>{FEATURES.bathroom.label}</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedFilters.kitchen ? css.selected : ""
          }`}
          onClick={() => handleFilterSelection("kitchen")}
        >
          <FEATURES.kitchen.Icon size={20} className={css.icon} />
          <div className={css.label}>{FEATURES.kitchen.label}</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedFilters.TV ? css.selected : ""
          }`}
          onClick={() => handleFilterSelection("TV")}
        >
          <FEATURES.TV.Icon size={20} className={css.icon} />
          <div className={css.label}>{FEATURES.TV.label}</div>
        </div>
      </div>

      <div className={css.title}>Vehicle type</div>

      <div className={css.typeContainer}>
        <div
          className={`${css.filterButton} ${
            selectedVehicleType === "Van" ? css.selected : ""
          }`}
          onClick={() => handleVehicleTypeSelection("Van")}
        >
          <BiGrid size={20} className={css.icon} />
          <div className={css.label}>Van</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedVehicleType === "Fully Integrated" ? css.selected : ""
          }`}
          onClick={() => handleVehicleTypeSelection("Fully Integrated")}
        >
          <FourGrid size={20} className={css.icon} />
          <div className={css.label}>Fully Integrated</div>
        </div>

        <div
          className={`${css.filterButton} ${
            selectedVehicleType === "Alcove" ? css.selected : ""
          }`}
          onClick={() => handleVehicleTypeSelection("Alcove")}
        >
          <MoreGrid size={20} className={css.icon} />
          <div className={css.label}>Alcove</div>
        </div>
      </div>

      <Button onClick={handleFilter}>Search</Button>
    </div>
  );
}

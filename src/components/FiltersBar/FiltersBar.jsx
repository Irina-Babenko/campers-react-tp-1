import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice";
import css from "./FiltersBar.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleFilter = () => {
    dispatch(fetchCampers({ location }));
  };

  return (
    <div className={css.filters}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleFilter}>Apply</button>
    </div>
  );
}

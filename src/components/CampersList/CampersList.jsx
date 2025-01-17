import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice";
import CamperCard from "../CamperCard/CamperCard";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (!campers || campers.length === 0) {
    return <p>Loading campers...</p>;
  }

  return (
    <div>
      {campers.slice(0, visibleCount).map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      {visibleCount < campers.length && (
        <button onClick={handleShowMore}>Load more</button>
      )}
    </div>
  );
}

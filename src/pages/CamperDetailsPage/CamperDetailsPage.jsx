import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersSlice";

import DetailsCamper from "../../components/DetailsCamper/DetailsCamper";
import DetailsFeatures from "../../components/DetailsFeatures/DetailsFeatures";
import DetailsReviews from "../../components/DetailsReviews/DetailsReviews";
import Line from "../../components/ui/icons/Line";
import css from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.selectedCamper);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div className={css.detailsContainer}>
      <h1 className={css.title}>Camper</h1>
      <DetailsCamper camper={camper} />

      <div className={css.tabs}>
        <button
          className={activeTab === "features" ? css.activeTab : css.tab}
          onClick={() => setActiveTab("features")}
        >
          Features
          {activeTab === "features" && <Line className={css.activeLine} />}
        </button>
        <button
          className={activeTab === "reviews" ? css.activeTab : css.tab}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
          {activeTab === "reviews" && <Line className={css.activeLine} />}
        </button>
      </div>

      {activeTab === "features" && <DetailsFeatures camper={camper} />}
      {activeTab === "reviews" && <DetailsReviews camper={camper} />}
    </div>
  );
}

export default CamperDetailsPage;

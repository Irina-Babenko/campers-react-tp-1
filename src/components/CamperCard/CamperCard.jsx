import css from "./CamperCard.module.css";
import clsx from "clsx";
import Button from "../ui/Button/Button";
import Heart from "../ui/icons/Heart";
import Star from "../ui/icons/Star";
import Map from "../ui/icons/Map";

export default function CamperCard({ camper }) {
  return (
    <div className={css.card}>
      {camper.gallery?.length > 0 && (
        <img
          className={css.image}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
      )}
      <div className={css.text}>
        <div className={css.firstRow}>
          <h3 className={css.name}>{camper.name}</h3>
          <p className={css.price}>${camper.price}</p>
          <Heart className={css.heartIcon} />
        </div>
        <div className={css.secondRow}>
          <Star className={clsx(css.star)} />
          <p className={css.rating}>{camper.rating} </p>
          <p className={css.reviews}>({camper.reviews.length} Reviews)</p>
          <Map size={16} />
          <p className={css.location}>{camper.location}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
        <Button>Show more</Button>
      </div>
    </div>
  );
}

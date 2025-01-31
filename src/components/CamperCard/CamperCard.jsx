import { useDispatch, useSelector } from "react-redux";
import css from "./CamperCard.module.css";
import clsx from "clsx";
import Button from "../ui/Button/Button";
import HeartButton from "../ui/HeartButton/HeartButton";
// import Heart from "../ui/icons/Heart";
import Star from "../ui/icons/Star";
import Map from "../ui/icons/Map";
import { getAvailableFeatures } from "../../utils/getAvailableFeatures";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesCamper/favoritesSlice";
import { selectFavorites } from "../../redux/favoritesCamper/favoritesSelector";
import { useEffect } from "react";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { id, name, price, rating, location, description, gallery, reviews } =
    camper;

  const isFavorite = favorites.includes(id);
  console.log("Favorites:", favorites);
  console.log("Is this camper a favorite?", isFavorite);

  const handleFavoriteClick = () => {
    console.log("Favorite button clicked, isFavorite:", isFavorite);
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      console.log(`Removed camper ${id} from favorites`);
    } else {
      dispatch(addToFavorites(id));
      console.log(`Added camper ${id} to favorites`);
    }
  };

  useEffect(() => {
    console.log("Updated favorites:", favorites);
  }, [favorites]);

  const availableFeatures = getAvailableFeatures(camper);
  const [country, city] = location.split(", ");

  return (
    <div className={css.card}>
      {gallery?.length > 0 && (
        <img className={css.image} src={gallery[0].thumb} alt={name} />
      )}
      <div className={css.text}>
        <div className={css.firstRow}>
          <h3 className={css.name}>{name}</h3>
          <p className={css.price}>€{price.toFixed(2)}</p>

          <HeartButton isFavorite={isFavorite} onClick={handleFavoriteClick} />
        </div>
        <div className={css.secondRow}>
          <Star className={clsx(css.star)} />
          <p className={css.rating}>{rating} </p>
          <p className={css.reviews}>({reviews.length} Reviews)</p>
          <Map size={16} />
          <p className={css.location}>
            {city}, {country}
          </p>
        </div>
        <p className={css.description}>{description}</p>

        <div className={css.features}>
          {availableFeatures.map(({ label, Icon }) => (
            <div key={label} className={css.feature}>
              <Icon size={20} className={css.featureIcon} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <Link to={`/catalog/${id}`}>
          <Button>Show more</Button>
        </Link>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import css from "./DetailsCamper.module.css";
import clsx from "clsx";
import Star from "../ui/icons/Star";
import Map from "../ui/icons/Map";

function DetailsCamper({ camper }) {
  const { name, gallery, rating, reviewsCount, location, price, description } =
    camper;
  const [country, city] = location.split(", ");

  return (
    <div className={css.container}>
      <div className={css.details}>
        <h1 className={css.name}>{name}</h1>
        <div className={css.firstRow}>
          <Star className={clsx(css.star)} />
          <p className={css.rating}>{rating}</p>
          <p className={css.reviews}>({reviewsCount || 0} Reviews)</p>
          <Map size={16} />
          <p className={css.location}>
            {city}, {country}
          </p>
        </div>
        <p className={css.price}>€{price.toFixed(2)}</p>
      </div>

      <div className={css.gallery}>
        {gallery && gallery.length > 0 && (
          <div className={css.images}>
            {gallery.map((image, index) => (
              <img
                className={css.image}
                key={index}
                src={image.original}
                alt={`Camper Image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className={css.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

DetailsCamper.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsCamper;

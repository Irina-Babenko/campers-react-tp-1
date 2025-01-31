import Heart from "../icons/Heart";
import css from "./HeartButton.module.css";
import clsx from "clsx";

const HeartButton = ({ isFavorite, ...rest }) => {
  return (
    <button className={css.heartButton} {...rest}>
      <Heart
        width={24}
        height={24}
        className={clsx(
          css.heartIcon,
          isFavorite ? css.iconFavorite : css.iconDefault
        )}
      />
    </button>
  );
};

export default HeartButton;

import { FaSearch } from "react-icons/fa";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.erroCode}>404</h1>
      <p className={css.errorMessage}>
        Ooops... This page is not found...
        <FaSearch className={css.errorIcon} />
      </p>
    </div>
  );
};

export default NotFoundPage;

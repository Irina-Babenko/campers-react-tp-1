import css from "./HomePage.module.css";
import Button from "../../components/ui/Button/Button";

export default function HomePage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.contentWrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <Button type="button">View Now</Button>
      </div>
    </div>
  );
}

import FiltersBar from "../../components/FiltersBar/FiltersBar";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.catalogContainer}>
      <h1 className={css.title}>Catalog</h1>
      <div className={css.content}>
        <div className={css.filtersContainer}>
          <FiltersBar />
        </div>
        <div className={css.campersContainer}>
          <CampersList />
        </div>
      </div>
    </div>
  );
}

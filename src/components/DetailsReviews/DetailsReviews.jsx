import css from "./DetailsReviews.module.css";
import Star from "../ui/icons/Star";
import BookingModal from "../BookingModal/BookingModal";
// import clsx from "clsx";

function DetailsReviews({ camper }) {
  if (!camper.reviews || camper.reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet.</p>;
  }

  return (
    <div className={css.wraper}>
      <div className={css.reviewsContainer}>
        <ul className={css.reviewsList}>
          {camper.reviews.map((review, index) => (
            <li key={index} className={css.reviewItem}>
              <div className={css.reviewerInfo}>
                <div className={css.reviewerCircle}>
                  {review.reviewer_name[0]}
                </div>
                <div className={css.reviewerNameStar}>
                  <div className={css.reviewerName}>{review.reviewer_name}</div>
                  <div className={css.star}>
                    {[...Array(review.reviewer_rating)].map((_, starIndex) => (
                      <Star key={starIndex} />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.reviewComment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <BookingModal />
    </div>
  );
}

export default DetailsReviews;

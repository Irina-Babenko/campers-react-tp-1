import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import StyledDatePicker from "../../components/StyledDatePicker/StyledDatePicker"; // Импорт нового компонента
import css from "./BookingModal.module.css";

export default function BookingModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      bookingDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={css.modalContainer}>
      <h2 className={css.modalTitle}>Book your campervan now</h2>
      <p className={css.modalSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={css.input}
            placeholder="Name*"
          />
        </div>

        <div className={css.inputGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={css.input}
            placeholder="Email*"
          />
        </div>

        <div className={css.inputGroup}>
          <StyledDatePicker
            selected={formData.bookingDate}
            onChange={handleDateChange}
          />
        </div>

        <div className={css.inputGroup}>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className={css.input}
            placeholder="Comment"
          />
        </div>

        <Button cssstyle="submit" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
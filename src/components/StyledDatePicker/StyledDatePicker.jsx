import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./StyledDatePicker.module.css";

const StyledDatePicker = ({ selected, onChange }) => {
  return (
    <div className={css.datePickerContainer}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        className={css.input}
        placeholderText="Booking date*"
      />
    </div>
  );
};

export default StyledDatePicker;

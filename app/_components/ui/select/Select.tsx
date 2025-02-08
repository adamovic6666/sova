import { Control, Controller } from "react-hook-form";
import styles from "./Select.module.css";

const Select = ({
  name,
  control,
}: {
  name: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <select
            {...field}
            id={name}
            className={styles.Select}
            value={field.value}
          >
            <option value="Up to $1,000">Up to $1,000</option>
            <option value="$1,000 - $2,500">$1,000 - $2,500</option>
            <option value="$2,500 - $5,000">$2,500 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
          {fieldState.error && (
            <p className={styles.SelectError}>{fieldState.error.message}</p>
          )}
        </>
      )}
    />
  );
};

export default Select;

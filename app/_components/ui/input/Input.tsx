"use client";
import styles from "./Input.module.css";
import { Control, Controller } from "react-hook-form";

const Input = ({
  name,
  label,
  control,
  type = "text",
  inputType,
}: {
  name: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  type?: string;
  inputType?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderInput = ({ field, fieldState }: any) => {
    return (
      <>
        {inputType === "textarea" ? (
          <textarea
            {...field}
            type={type}
            id={name}
            data-text={field.value || ""}
          />
        ) : (
          <input {...field} type={type} id={name} value={field.value || ""} />
        )}
        {fieldState.error && (
          <p className={styles.InputError}>{fieldState.error.message}</p>
        )}
        <label>{label}</label>
      </>
    );
  };

  return (
    <div className={styles.InputWrapper}>
      <Controller name={name} control={control} render={renderInput} />
    </div>
  );
};

export default Input;

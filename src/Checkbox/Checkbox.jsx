import React from "react";
import { useFormContext } from "react-hook-form";
import "./styles.css";

export const Checkbox = ({ name, children }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        className={(errors[name]?.message ? "error " : "") + "checkbox-element"}
        {...register(name)}
      />
      <p>{children}</p>
      <span>{errors[name]?.message}</span>
    </label>
  );
};

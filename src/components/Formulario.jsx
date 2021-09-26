import React from "react";
import { useForm } from "react-hook-form";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <label className="label">City Name</label>
      <br />
      <input
        className="input-text"
        placeholder="London"
        {...register("Ciudad", { required: true })}
      />
      <br />
      {errors.Ciudad && (
        <span
          className={` ${
            props.temperature >= 18 ? "span-error-warm" : "span-error-cold"
          }`}
        >
          *This field is required
        </span>
      )}
      <br />
      <br />

      <label className="label ">State Code</label>
      <br />
      <input
        className="input-text"
        placeholder="UK"
        {...register("Iniciales", { required: true })}
      />
      <br />
      {errors.Iniciales && (
        <span
          className={` ${
            props.temperature >= 18 ? "span-error-warm" : "span-error-cold"
          }`}
        >
          *This field is required
        </span>
      )}
      <br />
      <br />

      <input
        className={`w-full rounded-md font-semibold ${
          props.temperature >= 18 ? "btn-warm" : "btn-cold"
        }`}
        type="submit"
        value="Weather!"
      />
      <br />
      <br />
    </form>
  );
}

export default Formulario;

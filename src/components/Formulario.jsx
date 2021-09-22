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
      {errors.Ciudad && <span className="span-error">*This field is required</span>}
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
      {errors.Iniciales && <span className="span-error">*This field is required</span>}
      <br />
      <br />

      <input
        className="w-full rounded-md font-semibold bg-yellow-400 text-blue-800 "
        type="submit"
        value="Weather!"
      />
      <br />
      <br />
    </form>
  );
}

export default Formulario;

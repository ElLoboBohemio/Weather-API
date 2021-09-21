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
      <label>City Name</label>
      <br />
      <input {...register("Ciudad", { required: true })} />
      <br />
      {errors.Ciudad && <span>*This field is required</span>}
      <br />
      <br />

      <label>
        State Code<span> Example: UK (United Kindom)</span>
      </label>
      <br />
      <input {...register("Iniciales", { required: true })} />
      <br />
      {errors.Iniciales && <span>*This field is required</span>}
      <br />
      <br />

      <input type="submit" />
    </form>
  );
}

export default Formulario;

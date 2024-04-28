import { useForm } from "react-hook-form";
import React from "react";
import './App.css'


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // watch input value by passing the name of it

  return (
    <>
      {isSubmitting && console.log("loading....")}
      <div className="form">
      {/*  "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="username"
          {...register("UN", {
            required: { value: true, message: "bhardo bhai" },
            maxLength: { value: 8, message: "8 bhardo" },
            minLength: { value: "3", message: "3 bhar do" },
          })}
        />
        {/* errors will return when field validation fails  */}

        {errors.UN && <div>{errors.UN.message}</div>}

        {/* include validation with required or other standard HTML validation rules */}

        <input className="pass"
          placeholder="password"
          type="password"
          {...register("pw", {
            required: { value: true, message: "bhardo" },
            maxLength: { value: 12, message: "12 bhardo" },
            minLength: { value: "7", message: "7 bhar do" },
          })}
        />

        {/* errors will return when field validation fails  */}

        {errors.pw && <span>{errors.pw.message}</span>}

        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}

    {/*   <input placeholder="password" type="password" {...register("pw", { required: true })} />
      {errors.pw && <span>This field is required</span>}
     */}

        <input  className="btn" type="submit" disabled={isSubmitting} />
      </form>
      </div>
    </>
  );
}

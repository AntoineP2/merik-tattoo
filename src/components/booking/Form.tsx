"use client";
import { TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  surname: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
      {...register("name", { required: true , minLength: { value : 2, message : "Veuillez rentrer au moins 2 caractères"}})} 
      label="Votre prénom" 
      variant="filled"
      />

      <input {...register("surname", { required: true })} placeholder="Votre nom" className="bg-neutral-700" />

      {errors.surname && errors.surname.type =="required" && <span>This field is required</span>}
      {errors.name && errors.name.type =="minLength" && <span>Le pseudo est trop court !</span>}
      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Form;

//<TextField
// id="surname"
// label="Votre nom"
// variant="filled"
// {...(surname.length < 2 ? { color: "warning" } : {color: "success"})}
// value={surname}
// onChange={(event) => {
//   setSurname(event.target.value);
// }}
// />
// <TextField
// id="name"
// label="Votre prénom"
// variant="filled"
// value={name}
// onChange={(event) => {
//   setName(event.target.value);
// }}
// />

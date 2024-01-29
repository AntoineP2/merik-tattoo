"use client";
import { CircularProgress, FilledInput, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  surname: string;
  age: string;
  email: string;
  phoneNumber: string;
  image: string;
  description: string;
};

type ErrorForm = {
  name: boolean,
  surname: boolean,
  age: boolean
}

const selectAge = ["18-25", "25-45", "45-75", "75+"];

const FormRegular = () => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)
  const [age, setAge] = useState('');
  const [isImage, setIsImage] = useState('')
  const [errorForm, setErrorForm] = useState<ErrorForm>({ name: false, surname: false, age: false })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleChangeImage = (event: SelectChangeEvent) => {
    setIsImage(event.target.value);
  }

  return (
    <div>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='bg-neutral-800 mx-2 rounded-lg shadow-md md:w-[60%] '>
          <div className="flex flex-col gap-4 px-4 py-5">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                {...register("name", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
                label="Nom"
                variant="filled"
              />
              <TextField
                {...register("surname", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
                label="Prenom"
                variant="filled"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormControl variant="filled">
                <InputLabel id="age">Age</InputLabel>
                <Select
                  {...register("age", { required: true })}
                  labelId="age"
                  id="age"
                  value={age}
                  label="Age"
                  onChange={handleChangeAge}
                >
                  {selectAge.map((age, index) => <MenuItem value={age} key={index}>{age}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <TextField
              {...register("email", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
              label="email"
              variant="filled"
            />
            <TextField
              {...register("phoneNumber", { required: true })}
              label="Numero de Téléphone"
              variant="filled"
            />
            <div className="grid grid-cols-2 gap-4">
              <FormControl variant="filled">
                <InputLabel id="image">A tu deja un dessin ?</InputLabel>
                <Select
                  {...register("image", { required: true })}
                  labelId="image"
                  id="image"
                  value={isImage}
                  label="image"
                  onChange={handleChangeImage}
                >
                  <MenuItem value='yes'>Oui</MenuItem>
                  <MenuItem value='no'>Non</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
            {...register("description", { required: true, maxLength: { value: 200, message: "Veuillez rentrer au maximum 200 caractères" }})}
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={4}
              placeholder="Description de ton tatouage, et précise également l'emplacement"
              variant="filled"
            />

            <button type="submit" className="bg-neutral-700 w-[40%] shadow-md self-center py-2 transition ease-in-out duration-75 rounded-lg active:scale-95 hover:bg-neutral-600">
              <div className="flex items-center justify-center">
                {submitLoading ? <CircularProgress size={20} /> : <p> Envoyer</p>}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegular;
"use client"
import {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import encryptPassword from '@/utils/encryptPassword';
import axios from "axios";
import { decodeToken } from '@/utils/decodeToken';
import Cookies from 'js-cookie';
import { Cookie } from 'next/font/google';
import { useDispatch } from 'react-redux';
import { login } from '@/tools/store/auth.slice';
import { useRouter } from 'next/navigation'


type Inputs = {
    name: string;
    password: string;
};

const FormLogin = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [publicKey, setPublicKey] = useState<string>("No public key")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const { name, password } = data;
        const encryptedPassword = encryptPassword(password);
        await loginSubmit(name, encryptedPassword);
    };

    const loginSubmit = async (name: string, passwordCrypted: string) => {
        try{
            const response = await axios.post("http://localhost:3005/api/v1/log/login", {userName: name, userPasswordCrypted: passwordCrypted});
            Cookies.set("token", response.data)
            dispatch(login())
            router.push("/")
        }
        catch(error){
            console.log(error)
        }
    }

    const handleSetKey = () => {
        setPublicKey(process.env.NEXT_PUBLIC_KEY_JWT)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("name", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
                    label="Pseudo"
                    variant="filled"
                />
                <TextField
                    {...register("password", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
                    label="Mot de passe"
                    type="password"
                    variant="filled"
                />
                <button type="submit" className="bg-neutral-700 px-3 py-1 transition ease-in-out duration-75 rounded-sm active:scale-95 hover:bg-neutral-600"> Envoyer </button>
            </form>
            <button onClick={handleSetKey}>VOIR CLEE PUBLIC</button>
            <p> {publicKey}</p>
        </div>
    )
}

export default FormLogin
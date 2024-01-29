"use client"
import { useState } from 'react'
import { useForm, SubmitHandler, set } from "react-hook-form";
import { CircularProgress, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import encryptPassword from '@/utils/encryptPassword';
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '@/tools/store/auth.slice';
import { useRouter } from 'next/navigation'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { toast } from 'sonner'



type Inputs = {
    name: string;
    password: string;
};

const FormLogin = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [publicKey, setPublicKey] = useState<string>("No public key")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [submitLoading, setSubmitLoading] = useState<boolean>(false)
    const [errorLogin, setErrorLogin] = useState<boolean>(false)
    const [errorRegex, setErrorRegex] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { name, password } = data;
        const encryptedPassword = encryptPassword(password);
        await loginSubmit(name, encryptedPassword);
    };

    const loginSubmit = async (name: string, passwordCrypted: string) => {
        try {
            setSubmitLoading(true)
            const regex = /^[a-zA-Z0-9]+$/;
            if (!regex.test(name)) {
                toast.error("Veuillez rentrer un nom d'utilisateur valide.")
                setSubmitLoading(false)
                setErrorRegex(true)
                return
            }
            const response = await axios.post("http://localhost:3005/api/v1/log/login", { userName: name, userPasswordCrypted: passwordCrypted });
            Cookies.set("token", response.data)
            dispatch(login())
            setSubmitLoading(false)
            setErrorLogin(false)
            setErrorRegex(false)
            toast.success("Vous êtes connecté, Bienvenu Marvin !")
            router.push("/")
        }
        catch (error) {
            setSubmitLoading(false)
            setErrorLogin(true)
            toast.error("Nom d'utilisateur ou mot de passe incorrect.")
            console.log(error)
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className='flex justify-center items-center'><h2 className='pb-5 text-lg font-bold'>FORMULAIRE DE CONNEXION</h2></div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='bg-neutral-800 mx-2 rounded-lg shadow-md md:w-[40%] '>
                    <div className="flex flex-col gap-4 px-4 py-5">
                        <TextField
                            {...register("name", { required: true, minLength: { value: 2, message: "Veuillez rentrer au moins 2 caractères" } })}
                            label="Pseudo"
                            {...(errorRegex && { error: true, helperText: "Veuillez rentrer un nom d'utilisateur valide." })}
                            variant="filled"
                        />
                        <FormControl variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                {...register("password", { required: true, minLength: { value: 5, message: "Veuillez rentrer au moins 5 caractères" }, maxLength: { value: 20, message: "Veuillez rentrer au maximum 20 caractères" } })}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <button type="submit" className="bg-neutral-700 w-[40%] shadow-md self-center py-2 transition ease-in-out duration-75 rounded-lg active:scale-95 hover:bg-neutral-600">
                            <div className="flex items-center justify-center">
                                {submitLoading ? <CircularProgress size={20} /> : <p> Connexion</p>}
                            </div>
                        </button>
                        {errorLogin && <p className='text-red-500'>Nom d'utilisateur ou mot de passe incorrect.</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
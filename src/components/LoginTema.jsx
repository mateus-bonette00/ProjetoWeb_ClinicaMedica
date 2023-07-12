// eslint-disable-next-line
import { DevTool } from '@hookform/devtools';
import '../styles/Cadastro.css';
// eslint-disable-next-line
import {set, useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// eslint-disable-next-line
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

//as especificações da conta
const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(2,'Senha com no mínimo 3 caracteres').required(),
}).required();


export default function Login(){

    const [msg, setMsg] = useState(' ');

    const form = useForm({
        resolver: yupResolver(schema)
    });
// eslint-disable-next-line
    const { register, control, handleSubmit, formState } = form;

    const {errors} = formState;

    const submit = async (data) => {
        
        try {
            // eslint-disable-next-line
            const response = await axios.post('http://localhost:3000/login', data);
            setMsg('Usuário Autenticado');
            console.log(data)
        } catch (error) {
            console.log('Deu erro')
            setMsg(error.response.data);
        }   
        
    }

    if(msg.includes('Usuário Autenticado')){
        return <Navigate to='/home' />
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)} noValidate>

                <label htmlFor="email" placeholder="email">Email</label>
                <input type="text" id="email" {...register('email')} />
                <p className='erro'>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register('password')} />
                <p className='erro'>{errors.password?.message}</p>

                <button>Entrar</button>
            </form>
            {/* <DevTool control={control}/> */}
            <p className="server-response">{msg}</p>
            <div>
                Não possui conta? 
                <Link to="/cadastro"> Cadastro</Link>
            </div>
            
            
        </>
    )

}
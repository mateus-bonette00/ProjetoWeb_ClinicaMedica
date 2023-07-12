// eslint-disable-next-line
import { DevTool } from '@hookform/devtools';
import '../styles/Cadastro.css';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// eslint-disable-next-line
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


//as especificações da criação da conta
const schema = yup.object({
    nome: yup.string().required('Nome obrigatório'),
    sobrenome: yup.string().required('Sobrenome obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(3,'Senha com no mínimo 3 caracteres').required(),
    passwordConf: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'As senhas devem coincidir!'),
}).required();


export default function Cadastro(){

    const [msg, setMsg] = useState();

    const form = useForm({
        resolver: yupResolver(schema)
    });
    // eslint-disable-next-line
    const { register, control, handleSubmit, formState } = form;

    //controle de erros
    const {errors} = formState;

    //Aqui é a função de quando o usuario aperta o botão 'submeter'
    const submit = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/cadastro', data);
            setMsg(response.data);
        } catch (error) {
            console.log("enterou no error")
            console.log(error)
            setMsg(error.response.data);
        } 

    }


    return (
        <>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <label htmlFor="nome" placeholder="Primeiro nome*">Nome 1:</label>
                <input type="text" id="nome" {...register('nome')} />
                <p className='erro'>{errors.nome?.message}</p>

                <label htmlFor="sobrenome" placeholder="Sobrenome*">Nome 2:</label>
                <input type="text" id="sobrenome" {...register('sobrenome')} />
                <p className='erro'>{errors.sobrenome?.message}</p>

                <label htmlFor="email" placeholder="email">Email</label>
                <input type="text" id="email" {...register('email')} />
                <p className='erro'>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register('password')} />
                <p className='erro'>{errors.password?.message}</p>

                <label htmlFor="password">Confirmar Senha</label>
                <input type="password" id="passwordConf" {...register('passwordConf')} />
                <p className='erro'>{errors.passwordConf?.message}</p>

                <button>Submeter</button>
            </form>
            {/* A parte aqui de baixo serve para verificar se os dados estão dando certo */}
            {/* Mas vou desativar pq ja deu tudo certo */}
            <DevTool control={control}/>
            <p>{msg}</p>

            <div>
                Ja possui conta?
                <Link to='/login'> Clique aqui!</Link>
            </div>
        </>
    )

}
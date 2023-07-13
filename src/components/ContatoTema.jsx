// eslint-disable-next-line
import { DevTool } from '@hookform/devtools';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// eslint-disable-next-line
import axios, * as others from 'axios';
import { useState } from 'react';


//as especificações da criação da conta
const schema = yup.object({
    nome: yup.string().required('Nome obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    // telefone: yup.string(),
    mensagem: yup.string().required('Escreva sua mensagem para nós!')
}).required();


export default function ContatoTema(){

    const [msg, setMsg] = useState();

    const form = useForm({
        resolver: yupResolver(schema)
    });

    // eslint-disable-next-line
    const { register, control, handleSubmit, formState } = form;

    //controle de erros
    const {errors} = formState;

    //Aqui é a função de quando o usuario aperta o botão 'Enviar'
    const submit = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/contato', data);
            setMsg(response.data);
        } catch (error) {
            console.log('Entrou no erro')
            setMsg(error.response.data);
        } 

    }


    return (
        <div className='formulario' >
            <form  onSubmit={handleSubmit(submit)} noValidate>
                <p className='erro'>{errors.nome?.message}</p>
                <input type="text" id="nome" placeholder="Nome*" {...register('nome')} />

                <p className='erro'>{errors.email?.message}</p>
                <input type="text" id="email" placeholder="E-mail*" {...register('email')} />

                {/* <p className='erro'>{errors.telefone?.message}</p>
                <input type="telefone" id="telefone" placeholder="Telefone" {...register('telefone')} /> */}

                <p className='erro'>{errors.mensagem?.message}</p>
                <textarea id="mensagem" placeholder="Mensagem*" {...register('mensagem')} className="inputMsg"></textarea>

                <button className='botaoCont'>Enviar</button>
            </form>

            {/* A parte aqui de baixo serve para verificar se os dados estão dando certo */}
            {/* Mas vou desativar pq ja deu tudo certo */}
            {/* <DevTool control={control}/> */}
            <p>{msg}</p>

        </div>
    )

}
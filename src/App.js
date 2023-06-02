import React, { useState } from 'react';
import Loginpage from './pageLogin'
import './App.css';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {RxArrowRight} from 'react-icons/rx'
import {MdPersonPin} from 'react-icons/md'

export default function App() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  const forca = (senha) => {

    if (!senha || senha === '') {
      return '';
    }
    else if (senha.length < 6) {
      return 'muito curta'
    } else if (!/[A-Z]/.test(senha) || !/[a-z]/.test(senha)) {
      return 'muito fraca'
    } else if (!/[0-9]/.test(senha)) {
      return 'fraca'
    } else if (!/[!@#$%^&*()]/.test(senha)) {
      return 'média'
    } else {
      return 'forte';
    }
  }


  const validarEmail = (email) => {

    if (!email || email.trim() === '') {
      return false;
    }


    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return regex.test(email);
  };

  const validarNome = (nome) => {
    if (nome && nome.trim().length > 5) {
      return true;
    } else {
      return false;
    }
  }

  const login = () => {
    const forcaSenha = forca(senha);
    const valEmail = validarEmail(email);
    const valNome = validarNome(nome);

    if ((forcaSenha === 'forte' || forcaSenha === 'média') && valEmail && valNome) {
      alert('está tudo ok')
    } else if (forcaSenha === 'muito curta' || forcaSenha === 'muito fraca' || forcaSenha === 'fraca') {
      alert('Por favor insira uma senha válida')
    } else if (forcaSenha === '') {
      alert('Por favor, preencha uma senha');
    } else if (!valNome){
      alert('Por favor, preencha o seu nome')
    } else if (!valEmail){
      alert('E-mail inválido, por favor preencha com um e-mail válido')
    }
  }


  return (

    <container>

      <Loginpage/>
      
      <div className='body'>
        <div className='content'>
          <div className='formulario'>
          <div className='input-container'>
              <div className='icon-container4'>
                <MdPersonPin className="search-icon1" />
              </div>
            </div>
            <h1>Create account!</h1>
            <p>Name</p>
            <input className='input' placeholder='enter your name' type='text' value={nome} onChange={(e) => setNome(e.target
              .value)} />
            <div className='input-container'>
              <div className='icon-container'>
                <CgProfile className="search-icon1" />
              </div>
            </div>
            <p>Email</p>
            <input className='input' placeholder='enter your email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className='input-container'>
              <div className='icon-container'>
                <AiOutlineMail className="search-icon2" />
              </div>
            </div>
      
            <p>Senha</p>
            <div className='input-container'>
              <div className='icon-container2'>
                <AiOutlineLock className="search-icon3" />
              </div>
            </div>
            <input title='1 letra maiúscula/numeros entre 0 e 9/1 caractere especial' className='input' placeholder='enter your password' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button className='btn' onClick={() => login()} >Create</button>
            <div className='input-container'>
              <div className='icon-container3'>
                <RxArrowRight className="search-icon3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  )


}

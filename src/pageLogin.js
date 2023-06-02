import React, { useState } from "react";
import { FiLogIn } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

export default function App() {
  const  [login,setlogin] =useState('')
  const [senha,setSenha]= useState ('')
    
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };



  const validarLogin = (login) => {

    if (!login || login.trim() === '') {
      return false;
    }


    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return regex.test(login);
  };

  const sign_in = (login,senha) => {
    const input_senha = senha
    const input_login = login
    const valLogin = validarLogin(login)

    if ((input_login === '' || input_senha === '' ) || !valLogin){
        alert('Para continuar preencha corrente seu login e senha por favor!')
    }
  }

  
  
  return (
    <content>
      <div className="area_login">
        <FiLogIn className="search-login" />
        <h1>Welcome!</h1>
        <p>Sign in to your account</p>
        <div className="content-input">
          <p>Email</p>
          <input value={login} type="email" onChange={(e)=>setlogin(e.target.value)} />
          <div className="container_profile">
            <div className="container_iconprofile">
              <CgProfile className="icon-profile" />
            </div>
          </div>
          <p>Password</p>
          <input title='1 letra maiúscula/numeros entre 0 e 9/1 caractere especial'
            className="" value={senha} onChange={(e)=>setSenha(e.target.value)}
            type={senhaVisivel ? 'text' : 'password'}
          />
          <div className="container_profile">
            <div className="container_iconprofile">
              {senhaVisivel ? (
                <AiFillEyeInvisible
                  className="icon-eye"
                  onClick={toggleSenhaVisivel}
                />
              ) : (
                <AiFillEye className="icon-eye" onClick={toggleSenhaVisivel} />
              )}
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>Remember me?</p>
            <a>Forgot your password?</a>
          </div>

          <div className="btn-login">
            <button  onClick={()=>sign_in(login,senha)}>Sign in</button>
            <div className="div_arrowsignin">
              <div className="arrow_signin">
                <BsArrowRight className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </content>
  );
}

import { useState,useRef,useContext } from 'react';
import {useHistory} from "react-router-dom"

import classes from './AuthForm.module.css';
import AuthContext from "../../store/authContext"

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [isLoading,setLoading] = useState(false)
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    setLoading(true)

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDNHZfTe3bAvUdm0Wj79nMOVQQ7dIdhhA'
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDNHZfTe3bAvUdm0Wj79nMOVQQ7dIdhhA'
    }

    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{"Content-Type":"application/json"}
    }).then(res=>{
      setLoading(false)
      if(res.ok){
        //res.json().then(data=>console.log(data))
        return res.json()
      }else{
        return res.json().then((data)=>{
          throw new Error("Authencation failed :"+data.error.message)
        })
      }
    }).then((data)=>{
      const expirationDate = new Date(new Date().getTime()+(Number(data.expiresIn)*1000))
      authCtx.login(data.idToken,expirationDate.toISOString())
      history.replace("/")
    }).catch(error=>alert(error.message))

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

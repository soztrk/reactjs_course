import React, { useState,useEffect,useReducer,useContext,useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from "../UI/Input/Input"

const inputObjModel = {
  value:"",
  isValid:null
}

const validateEmail = (email) => {
  return email.includes('@') && email.includes('.')
}

const validatePassword = (password) => {
  return password.trim().length > 7
}

const formReducer = (state,action) => {

  if(action.type === "EMAIL_CHANGE"){
    return {value:action.value,isValid:validateEmail(action.value)}
  }

  if(action.type === "EMAIL_BLUR"){
    return {value:state.value,isValid:state.value}
  }

  if(action.type === "PASSWD_CHANGE"){
    return {value:action.value,isValid:validatePassword(action.value)}
  }

  if(action.type === "PASSWD_BLUR"){
    return {value:state.value,isValid:state.value}
  }

  return {...inputObjModel}
}

const Login = (props) => {

  const authCtx = useContext(AuthContext)

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail] = useReducer(formReducer,{...inputObjModel})
  const [passwordState,dispatchPassword] = useReducer(formReducer,{...inputObjModel})

  // alternative-1: const {isValid: emailIsValid} = emailState
  // alternative-1: const {isValid: passwordIsValid} = passwordState

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(()=>{

    const timeIndentifier = setTimeout(()=>{
      setFormIsValid(
        // alternative-1: emailIsValid && passwordIsValid
        emailState.isValid && passwordState.isValid
      );
    },500)

    return ()=>{
      clearTimeout(timeIndentifier)
    }
  },[emailState.isValid,passwordState.isValid])
  // alternative-1: [emailIsValid,passwordIsValid])


  const emailChangeHandler = (event) => {
    dispatchEmail({type:"EMAIL_CHANGE",value:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"PASSWD_CHANGE",value:event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'EMAIL_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"PASSWD_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailState.isValid){
      emailInputRef.current.focus()
    }
    else{
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef} 
          id="email" 
          label="E-Mail" 
          type="email" 
          isValid={emailState.isValid} 
          value={emailState.value} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} />

        <Input
          ref={passwordInputRef} 
          id="password" 
          label="Password" 
          type="password" 
          isValid={passwordState.isValid} 
          value={passwordState.value} 
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

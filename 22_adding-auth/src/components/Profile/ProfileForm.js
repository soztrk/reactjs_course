import {useRef,useContext,useState} from "react"
import {useHistory} from "react-router-dom"

import classes from './ProfileForm.module.css';
import AuthContext from "../../store/authContext";

const ProfileForm = () => {

  const passwordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const [isLoading,setLoading] = useState(false)
  const history = useHistory()

  const submitFormHandler = (event) => {
    event.preventDefault()
    
    setLoading(true)
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDDNHZfTe3bAvUdm0Wj79nMOVQQ7dIdhhA",{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:passwordInputRef.current.value,
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
      authCtx.login(data.idToken)
      history.replace("/")
    }).catch(error=>alert(error.message))

  }

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input minLength={8} ref={passwordInputRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button disabled={isLoading}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

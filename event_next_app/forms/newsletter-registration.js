import {useRef} from "react"
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef()

  async function registrationHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value

    try{
      const response = await fetch("/api/newsletter",{
        method:"POST",
        body:JSON.stringify({email}),
        headers:{
          "Content-Type":"application/json"
        }
      })

      if(response.ok) {
        event.target.reset()
        alert("Email successfully registered!")
      }else{
        const data = await response.json()
        throw new Error(data.message)
      }
    } catch (error){
      alert(error)
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            required
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

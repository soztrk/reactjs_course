import useInput from "../hooks/useInputReducer"

const BasicForm = (props) => {

  const {
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim() !== "")

  const {
    value:enteredLastName,
    isValid:enteredLastNameIsValid,
    hasError:lastNameInputHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput
  } = useInput(value=>value.trim() !== "")

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  } = useInput(value=>value.includes("@"))

  const isFormVaild = enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid

  const formSubmitHandler = event => {
    event.preventDefault()

    console.log("First Name : "+enteredName)
    console.log("Last Name : "+enteredLastName)
    console.log("Email : "+enteredEmail)

    resetNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={"form-control"+(nameInputHasError ? " invalid" : " ")}>
          <label htmlFor='name'>First Name</label>
          <input 
          value={enteredName}
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler}
          type='text' id='name' />
          {nameInputHasError && <p className="error-text">First Name must not be empty</p>}
        </div>
        <div className={"form-control"+(lastNameInputHasError ? " invalid" : " ")}>
          <label htmlFor='last-name'>Last Name</label>
          <input 
          value={enteredLastName}
          onChange={lastNameChangeHandler} 
          onBlur={lastNameBlurHandler}
          type='text' id='last-name' />
          {lastNameInputHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>
      <div className={"form-control"+(emailInputHasError ? " invalid" : " ")}>
        <label htmlFor='email'>Email</label>
        <input 
        value={enteredEmail}
        onChange={emailChangeHandler} 
        onBlur={emailBlurHandler}
        type='email' id='email' />
        {emailInputHasError && <p className="error-text">Email must be vaild</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormVaild}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

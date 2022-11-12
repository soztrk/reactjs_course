import {useState} from "react"

const SimpleInput = (props) => {

  const inputsDefault = {
    name:{isTouched:false,value:""},
    email:{isTouched:false,value:""}
  }

  const [inputs,setInputs] = useState(inputsDefault)

  const inputChangeHandler = event => {
    setInputs((prevInputs)=>{
      const updatedInputs = {...prevInputs}
      updatedInputs[event.target.id].value = event.target.value
      return updatedInputs
    })
  }

  const inputBlurHandler = event => {
    setInputs((prevInputs)=>{
      const updatedInputs = {...prevInputs}
      updatedInputs[event.target.id].isTouched = true
      return updatedInputs
    })
  }

  const isInputVaild = (inputName,type) => {
    if(!inputs[inputName].isTouched) return true
    else return validateValue(inputs[inputName].value,type)
  }

  const validateValue = (value,type) => {
    // todo: data can be obtained form event.target somehow
    if(type === "text") return value.trim() !== ""
    else if(type === "email") return value.includes("@") && value.includes(".")
    else return false
  }

  const isFormVaild = () => {
    return validateValue(inputs.name.value,"text") && validateValue(inputs.email.value,"email")
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setInputs((prevInputs)=>{
      const updatedInputs = {...prevInputs}
      for(const inputName in updatedInputs){
        updatedInputs[inputName].isTouched = true
      }
      return updatedInputs
    })

    if(!isFormVaild()) return
    
    console.log("name="+inputs.name.value+" email="+inputs.email.value)

    // reset form data
    setInputs((prevInputs)=>{
      const updatedInputs = {...prevInputs}
      for(const inputName in updatedInputs){
        updatedInputs[inputName].isTouched = false
        updatedInputs[inputName].value = ""
      }
      return updatedInputs
    })

  }

  return (
    <>
    <form onSubmit={formSubmissionHandler}> 
      <div className={"form-control"+(!isInputVaild("name","text") ? " invalid" : " ")}>
        <label htmlFor='name'>Your Name</label>
        <input 
          value={inputs.name.value} 
          onChange={inputChangeHandler} 
          onBlur={inputBlurHandler}
          type='text' id='name' />
      </div>
      {!isInputVaild("name","text") && <p className="error-text">Name must not be empty</p>}
      <div className={"form-control"+(!isInputVaild("email","email") ? " invalid" : "")}>
        <label htmlFor='email'>Your Email</label>
        <input 
          value={inputs.email.value} 
          onChange={inputChangeHandler} 
          onBlur={inputBlurHandler}
          type='email' id='email' />
      </div>
      {!isInputVaild("email","email") && <p className="error-text">Email must be valid</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
    </>
  );
};

export default SimpleInput;

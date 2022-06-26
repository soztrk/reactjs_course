import React,{useState} from "react"

const AlertContext = React.createContext({
    modalVisibile:false,
    onModalState : (state)=>{}, 
})

export const AlertContextProvider = (props) => {

    const [modalVisibile,setModalVisibility] = useState(false)

    const modalVisibilityHandler = (state) => {
        setModalVisibility(state)
    }

    return (
        <AlertContext.Provider
        value={{
            modalVisibile:modalVisibile,
            onModalState:modalVisibilityHandler,
        }} >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContext
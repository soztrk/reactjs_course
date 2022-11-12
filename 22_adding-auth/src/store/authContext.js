import React,{useState,useEffect,useCallback} from "react"

const AuthContext = React.createContext()

/* {
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
} */

let logoutTimer

const calculateReminingTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()
    return adjExpirationTime - currentTime
}

const retriveStoredToken = () => {

    const storedToken = localStorage.getItem("token")
    const storedExpirationDate = localStorage.getItem("expirationTime")

    const reminingTime = calculateReminingTime(storedExpirationDate)
    
    if(reminingTime <= 60000){
        localStorage.removeItem("token")
        localStorage.removeItem("expirationTime")
        return null
    }
    

    return {
        token: storedToken,
        reminingTime: reminingTime
    }
}

export const AuthContextProvider = (props) => {

    const tokenData = retriveStoredToken()
    let initialToken = tokenData ? tokenData.token : null
    const [token,setToken] = useState(initialToken)
    const userLoggedIn = !!token

    const loginHandler = (token,expirationTime) => {
        setToken(token)
        localStorage.setItem("token",token)
        localStorage.setItem("expirationTime",expirationTime)
        logoutTimer = setTimeout(logoutHandler,calculateReminingTime(expirationTime))
    }

    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("expirationTime")
        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    },[])

    useEffect(()=>{
        if(tokenData) logoutTimer = setTimeout(logoutHandler,tokenData.reminingTime)
    },[tokenData,logoutHandler])

    const contextValue = {
        token:token,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }   

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
        )
}

export default AuthContext
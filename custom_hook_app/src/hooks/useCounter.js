import {useState,useEffect} from "react"

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => forwards ? ++prevCounter : --prevCounter);
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter
}

export default useCounter
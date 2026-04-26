import { useContext, useState } from "react"
import { createContext } from "react";

const ErrorContext = createContext();

export const useError = () => {
    return useContext(ErrorContext);
};

export const ErrorProvider = ( {children} ) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const resetError = () => {
        setHasError(false);
        setErrorMessage("");
    }

    const errorDetected = (message) => {
        setHasError(true);
        setErrorMessage(message);
    }

    return(
        <ErrorContext.Provider value = { { hasError, errorMessage, resetError, errorDetected} }>
            { children }
        </ErrorContext.Provider>
    );
};
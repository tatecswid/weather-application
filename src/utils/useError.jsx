import { useState } from "react"

export const useError = () => {
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

    return { hasError, errorMessage, resetError, errorDetected };
}
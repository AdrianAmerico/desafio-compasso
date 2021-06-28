import { useState } from "react";

const useForm = (initialState) => {
    const [body, setBody] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setBody({ ...body, [name]: value })
    }

    const clear = () => {
        setBody(initialState)
    }
    return { body, onChange, clear }
}

export default useForm;
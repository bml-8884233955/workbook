import { useRef, useState } from "react";

const UncontrolledForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        setFormData(data);
    }

    return (
        <>
            <h3>What is an UncontrolledForm</h3>

            <ul>
                <li>
                    Form data is handled by DOM itself
                </li>
                <li>
                    React does not control input values
                </li>
                <li>
                    You use refs(useRef) to access values
                </li>
            </ul>

            <p>User types - DPM stores value - React reads using ref(when needed)</p>

            <p>Why Use Uncontrolled Forms ?</p>
            <ul>
                <li>
                    Less re-render(better performance)
                </li>
                <li>
                    Simpler for small forms
                </li>
                <li>
                    Useful for file inputs
                </li>
                <li>
                    Works well with non-React libraries
                </li>
            </ul>

            <div className="space-y-8 max-w-md mx-auto mt-10">
                <form onSubmit={handleFormSubmit} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Name"
                        ref={nameRef}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2">Submit</button>
                </form>

            </div>


            <p> Form values : {formData.name} , {formData.email}, {formData.password}</p>

            <p> Better Approach Form Data API  check on this </p>

            Using defaultValue (Important)

            👉 In uncontrolled forms:

            <input defaultValue="John" ref={nameRef} />

        </>
    )
}

export default UncontrolledForm;
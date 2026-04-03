import { useState } from "react";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        })
    }

    const validate = () => {
        let newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Invalid Email";
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form Submitted:", formData);
        setErrors({});
    }
    return (
        <>
            <h3 class="text-center text-2xl font-bold">Login Form</h3>
            <div className="space-y-8 max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-8">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="border p-2 w-full"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                        {/* Email */}
                        <div>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="border p-2 w-full"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}

                        </div>
                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="border p-2 w-full"
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}

                        </div>

                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2"> Submit </button>
                </form>
            </div>
            <p>Note: make is project level , seperation of validation and creating FormHook , so that any other form can also be integrted in Project</p>
        </>
    )
}

export default LoginForm;
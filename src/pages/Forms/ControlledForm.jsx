import { useState } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        agree: "",
        gender: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            agree: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email.includes('@')) {
            alert("Invalid email");
            return;
        }

        if (formData.password.length < 6) {
            alert("Password too short");
            return;
        }

        console.log(formData);

    }


    return (
        <>
            <h3 class="text-center text-2xl font-bold"> Controlled Form</h3>
            <div className="grid max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label>Checkbox</label>
                        <input
                            type="checkbox"
                            name="agree"
                            value={formData.agree}
                            onChange={(e) => setFormData({ ...formData, agree: e.target.check })} />
                    </div>
                    <div className="flex flex-col">
                        <label>Radio Button</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange} />
                    </div>
                    <div className="flex flex-col">
                        <label>Dropdown</label>
                        <select name="role" value={formData.role} onChnage={handleChange}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>


                    <div className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                        <button type="submit">Submit</button>
                    </div>

                </form>

            </div>

        </>
    )

}

export default ControlledForm;


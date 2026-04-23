import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikLoginForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Required"),
            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Required"),
        }),

        onSubmit: (values) => {
            console.log("Form Data:", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="p-4 max-w-sm mx-auto">
            {/* Email */}
            <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border p-2 w-full"
            />

            {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
            )}

            {/* Password */}
            <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border p-2 w-full mt-3"
            />

            {formik.touched.password && formik.errors.password && (
                <p className="text-red-500">{formik.errors.password}</p>
            )}

            {/* Submit */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-4 w-full"
            >
                Login
            </button>
        </form>
    );
}
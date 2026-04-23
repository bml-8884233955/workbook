import { paymentValidation } from "./PaymentValidation";
import { useForm } from "react-hook-form";

const PaymentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <>

            <h2>React Form Hook validations</h2>
            <h2 class="text-center text-2xl font-bold">
                Payment Form
            </h2>
            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Enter NAme"
                            className="w-full border p-2 rounded"
                            {...register("name", paymentValidation.name)}
                        />
                        {errors.name && (<p className="text-red-500">{errors.name.message}</p>)}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border p-2 rounded"
                            {...register("email", paymentValidation.email)}
                        />
                        {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            className="w-full border p-2 rounded"
                            {...register("amount", paymentValidation.amount)}
                        />
                        {errors.amount && (<p className="text-red-500">{errors.amount.message}</p>)}
                    </div>
                    {/* Submit */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default PaymentForm;
export const paymentValidation = {
    name: {
        required: "Name is required",
        minLength: {
            value: 3,
            message: "Minimum 3 characters required",
        },
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Only letters allowed",
        },
    },

    email: {
        required: "Email is required",
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format",
        },
    },

    amount: {
        required: "Amount is required",
        valueAsNumber: true,
        min: {
            value: 0,
            message: "Amount cannot be less than 0",
        },
        max: {
            value: 200,
            message: "Amount cannot be more than 200",
        },
        validate: (value) =>
            !isNaN(value) || "Only numbers are allowed",
    },
};
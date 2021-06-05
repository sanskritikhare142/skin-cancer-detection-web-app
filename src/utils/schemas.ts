import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Email must be a valid email")
    .required("This is a required field"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must have at least 6 characters")
    .required("This is a required field"),
});

export const signupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Email must be a valid email")
    .required("This is a required field"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must have at least 6 characters")
    .required("This is a required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This is a required field"),
});

import * as Yup from "yup";

import SigninErrors from 'errors/Signin';
import GlobalErrors from 'errors/Global';

export const SigninValidator = Yup.object().shape({
    email: Yup.string()
        .email(SigninErrors.email.invalid)
        .required(GlobalErrors.required),
    password: Yup.string()
        // .min(8, SigninErrors.password.min)
        // .max(24, SigninErrors.password.max)
        // .required(GlobalErrors.required)
});
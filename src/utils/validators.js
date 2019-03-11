import * as Yup from "yup";
import convert from 'convert-units';

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
window.convert = convert;
export const AddIngredientsValidator = Yup.object().shape({
    name: Yup.string().required(GlobalErrors.required),
    servingSize: Yup.string().required(GlobalErrors.required),
    calories: Yup.string().required(GlobalErrors.required),
    carbs: Yup.string().required(GlobalErrors.required),
    fat: Yup.string().required(GlobalErrors.required),
    scaleType: Yup.string().oneOf(['mass', 'volume']),
    cholesterol: Yup.string().required(GlobalErrors.required),
    sodium: Yup.string().required(GlobalErrors.required),
    dietaryFiber: Yup.string().required(GlobalErrors.required),
    sugar: Yup.string().required(GlobalErrors.required),
    protein: Yup.string().required(GlobalErrors.required),
    measurement: Yup.string()
        .oneOf(convert().list('mass').concat(convert().list('volume')).map(unit => unit.abbr))
        .required(GlobalErrors.required)
});
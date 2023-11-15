import { emailRegex, lengthRegex } from "../constant/constant";
export const isEmailValid = (email: string): string => {
    if (!email || email.trim() === '') {
        return 'Email is required';
    }

    const emailPattern: RegExp = emailRegex;

    if (!emailPattern.test(email)) {
        return 'Invalid email format';
    }
    return '';
};



export const CheckPasswordLoginTime = (password: string) => {


    if (lengthRegex.test(password)) {
        return "Invalid password"
    }

    return ""
}

export const onSubmitCheckEmailPassword = (email: string, password: string) => {
    let errorMessage = '';

    switch (true) {
        case !password && !email:
            errorMessage = "Email Password Required";
            break;
        case !password || password.trim() === '':
            errorMessage = 'Password is required';
            break;
        case !email || email.trim() === '':
            errorMessage = 'Email is required';
            break;
        default:
            errorMessage = '';
            break;
    }

    return errorMessage;
};

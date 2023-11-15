"use client"
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Button from '@/app/components/atoms/Button';
import Input from '@/app/components/atoms/Input';
import ValidationError from '@/app/components/atoms/ValidationError';
import { isEmailValid, CheckPasswordLoginTime, onSubmitCheckEmailPassword } from "../../utils/Validation"
import { loginUser } from "../../redux/silce/loginSilce"
import { useRouter } from 'next/navigation';
import { allRoutes } from '@/app/constant/path';

const LoginForm: React.FC = () => {
    const router = useRouter();
    interface userCredentials {
        email: string,
        password: string
    }


    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const dispatch = useDispatch();
    const userStatus = useSelector(state => state.login);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = onSubmitCheckEmailPassword(formData.email, formData.password)
        setErrorMessage(message)

        try {
            const userCredentials: userCredentials = {
                email: formData.email,
                password: formData.password,
            };
            const response = await dispatch(loginUser(userCredentials));
            console.log("Response ", response)
        } catch (error) {
            console.error('Login error:', error);
            // Handle error if needed
        }

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const validationErrormessage = isEmailValid(formData.email);
        setEmailErrorMessage(validationErrormessage);
        const validationPasswordError = CheckPasswordLoginTime(formData.password)
        setPasswordErrorMessage(validationPasswordError)
        setErrorMessage(" ")
    };

    useEffect(() => {
        // console.log(userStatus)
        if (userStatus?.user) {
            if (userStatus?.user[1]?.status === 200) {
                router.push(allRoutes.home);
            }
        }


    }, [userStatus]);
    return (
        <form onSubmit={handleLogin}>
            {errorMessage && <ValidationError message={errorMessage} />}
            <Input type="text" name="email" placeholder="Username or Email" value={formData.email} onChange={handleInputChange} />
            {emailErrorMessage && <ValidationError message={emailErrorMessage} />}
            <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            {passwordErrorMessage && <ValidationError message={passwordErrorMessage} />}
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;

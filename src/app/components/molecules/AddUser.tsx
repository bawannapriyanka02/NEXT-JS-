"use client"
//name, email, mobile, password
import React, { useState } from "react";
import Input from "../atoms/Input";
import FileUpload from "../atoms/FileUpload";
import { isEmailValid } from "@/app/utils/Validation";
const AddUser = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [userData, setUserData] = useState({ name: '', email: '', mobile: '', password: '' });
    const [errorMessage, setErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")


    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Handle the file upload logic here
        if (selectedFile) {
            console.log('Uploading file:', selectedFile);
            // You can send the file to a server or perform any other logic here
        } else {
            console.log('No file selected.');
        }
    };
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        const validationErrormessage = isEmailValid(userData.email);
        setEmailErrorMessage(validationErrormessage);
        const validationPasswordError = CheckPasswordLoginTime(formData.password)
        setPasswordErrorMessage(validationPasswordError)
        setErrorMessage(" ")

    }
    return <>
        <div className="card">
            <div className="card-header">
                Add User
            </div>
            <div className="card-body">
                <span>Name</span>
                <Input className={"className"}
                    type={"text"}
                    placeholder={"User Name"}
                    value={userData.name}
                    onChange={handleInputChange} />
            </div>
            <div className="card-body">
                <span>Email</span>
                <Input className={"className"}
                    type={"text"}
                    placeholder={"e.g BreakFast"}
                    value={"value"}
                    onChange={handleInputChange} />
            </div>
            <div className="card-body">
                <span>mobile</span>
                <Input className={"className"}
                    type={"text"}
                    placeholder={"e.g BreakFast"}
                    value={"value"}
                    onChange={handleInputChange} />
            </div>
            <div className="card-body">
                <span>Password</span>
                <Input className={"className"}
                    type={"text"}
                    placeholder={"e.g BreakFast"}
                    value={"value"}
                    onChange={handleInputChange} />
            </div>
            <div>
                <FileUpload />
            </div>
        </div>
    </>
}
export default AddUser
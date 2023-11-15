import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from "../../constant/constant"
interface UserCredentials {
    email: string;
    password: string;
}

interface LoginState {
    user: any;
    login: boolean;
    error: string | null;
    token: string | null;
}

const initialState: LoginState = {
    user: null,
    login: false,
    error: null,
    token: null,
};

interface User {
    email: string;
    password: string
}



export const loginUser = createAsyncThunk('login-action', async (userCredentials: UserCredentials) => {
    try {
        const response = await fetch(login, {
            method: 'POST',
            body: JSON.stringify(userCredentials),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        console.log("status", response.status)
        if (data?.token) {
            sessionStorage.setItem("my_token", data.token);
        }

        return [data, response];
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
});




const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        initialRender: (state, action: PayloadAction<{ loginStatus: boolean; userName: string; userToken: string }>) => {
            const { loginStatus, userName, userToken } = action.payload;
            if (loginStatus === true) {
                state.user = userName;
                state.login = true;
                state.error = null;
                state.token = userToken;
            }
        },
        logout: (state) => {
            state.user = null;
            state.login = false;
            state.error = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.login = true;
            state.error = null;
            state.token = 'token'; // Assign token from action if it exists
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.error.message || 'An error occurred';
        });
    },
});

export const { initialRender, logout } = loginSlice.actions;
export default loginSlice.reducer;

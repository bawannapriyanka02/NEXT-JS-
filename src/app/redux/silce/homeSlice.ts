import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type/interface for the User
interface User {
    id: number;
    name: string;
    // Add other properties as needed
}

// Define the state for the user slice
interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: UserState = {
    users: [],
    status: 'idle',
    error: null,
};

// Create an async thunk for fetching users
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw (error as Error).message;
    }
});

// Create a user slice
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload || [];
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
            });
    },
});



export default homeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
}

interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}


const initialState: UserState = {
    users: [],
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            const data: User = {
                id: Math.random().toString(36).substring(7),
                name: action.payload,
            };
            state.users.push(data);
        },
    },

});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

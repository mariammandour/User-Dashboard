import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TUser } from "src/types/user";
import type { TLoading } from "src/types/loading";
import getUsers from "./act/actGetUsers";

interface IUsersState {
    userRecords: TUser[];
    loading: TLoading;
    error: string | null;
    CurrentPage: number;
    SearchInputText?: string;
}

const initialState: IUsersState = {
    userRecords: [],
    loading: "idle",
    error: null,
    CurrentPage: 1,
    SearchInputText: "",
};

const UsersSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.CurrentPage = action.payload;
        },
        setSearchInputText(state, action: PayloadAction<string>) {
            state.SearchInputText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, state => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<TUser[]>) => {
            state.loading = "succeeded"
            state.userRecords = action.payload
            state.error = null
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = "failed"
            state.userRecords = []
            state.error = action.error.message || 'This is an error on fetching Data'
        })
    }
});

export const { setCurrentPage, setSearchInputText } = UsersSlice.actions;
export { getUsers };
export default UsersSlice.reducer;

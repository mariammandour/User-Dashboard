import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk(
    "Users/getUsers",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get("https://randomuser.me/api/?results=50");
            return response.data.results;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || error.message);
            } else {
                rejectWithValue("un expected error");
            }
        }
    }
);

export default getUsers;
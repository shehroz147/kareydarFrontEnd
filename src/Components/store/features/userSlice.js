import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPost, fetchUserDataById, onDefaultLogin, fetchUserData } from '../../lib/api';
// import { MMKV } from 'react-native-mmkv';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const storage = new MMKV();
export const defaultLogin = createAsyncThunk(
    'user/login',
    async params => {
        try {
            const response = await onDefaultLogin(params);
            // console.log("The response from backend is :", response);
            // console.log(response._id);
            await AsyncStorage.setItem("role", JSON.stringify(response.role));
            const role = await AsyncStorage.getItem('role');
            console.log(role);
            await AsyncStorage.setItem("userId", JSON.stringify(response._id));
            const id = await AsyncStorage.getItem("userId");
            console.log("userId:", id);
            // console.log(await AsyncStorage.getItem('role'))
            return { response, isSuccessed: true };
        } catch (e) {
            //save error
            return { isSuccessed: false };
        }
    },
);

export const getUserData = createAsyncThunk(
    'user/userData',
    async params => {
        try {
            const response = await fetchUserData(params);
            console.log("The response from backend is :", response);
            console.log(response._id);
            setProfile(response);
            return { response };
        } catch (e) {
            //save error
            return { isSuccessed: false };
        }
    },
);

export const register = createAsyncThunk('user/register/', async params => {
    try {
        const response = await fetchPost('register', params);
        return { response, isSuccessed: true };
    } catch (e) {
        //save error
        return { isSuccessed: false };
    }
});
export const getUserById = createAsyncThunk(
    'user/get_user_by_id',
    async params => {
        const response = await fetchUserDataById(params);
        return response;
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        token: null,
        isLoading: true,
        isSignout: false,
        havePlan: 'empty',
        authStatus: 'idle',
    },
    reducers: {
        signOut: state => {
            state.userInfo = null;
            state.token = null;
            state.isSignout = true;

            try {
                storage.delete('user.token');
                storage.delete('user.id');
            } catch (e) {
                console.error('Error:', e);
            }
        },
        setPlan: (state, action) => {
            state.havePlan = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(defaultLogin.pending, state => {
                state.isLoading = true;
                state.isSignout = false;
            })
            .addCase(defaultLogin.fulfilled, (state, action) => {
                if (!action.payload.isSuccessed) {
                    state.authStatus = 'login_failed';
                } else {
                    state.havePlan = 'login';
                    state.isLoading = false;
                    state.token = action.payload.response.token;
                    state.userInfo = action.payload.response.user;

                    try {
                        storage.set('user.token', action.payload.response.token);
                        storage.set('user.id', action.payload.response.user._id);
                    } catch (e) {
                        console.error('Error:', e);
                    }
                }
            });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.havePlan = 'login';
            state.isLoading = false;
            state.token = action.payload.token;
            state.userInfo = action.payload.user;
        });
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
                state.isSignout = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                if (!action.payload.isSuccessed) {
                    state.authStatus = 'register_failed';
                } else {
                    state.isLoading = false;
                    state.token = 'fake_token';
                }
            });
    },
});

export const { signOut, setPlan } = userSlice.actions;

export default userSlice.reducer;

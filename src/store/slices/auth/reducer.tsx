import { createSlice } from '@reduxjs/toolkit';
import {
    LOGOUT,
    RESET_INPUT,
    NAME,
    USERNAME,
    EMAIL,
    PASSWORD,
    CONTACT_NUMBER,
    SUCCESS,
    UNSUCCESSFUL_EMAIL,
    UNSUCCESSFUL_USERNAME,
    INVALID_EMAIL,
    INVALID_USERNAME_EMAIL,
    VALID_USERNAME_EMAIL,
    BOOLEAN_FALSE,
} from '../../../constants/authConstants';
import {
    isInputEmail,
    validEmailCheck,
    passwordComplexityCheck,
    validUsernameCheck,
    validContactNumberCheck,
    validNameCheck,
    getAuthErrorMessage,
} from "../../actions/auth/validationCheck";
import { initialStateModel } from '../../../models/authModel';
import { loginByUsername } from './services/loginService';
import { register } from './services/registerService';
import { json } from 'stream/consumers';


const initialAuthState: initialStateModel = {
    isAuthenticated: BOOLEAN_FALSE,
    message: "",
    remarks: ""
};

let result: initialStateModel;
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            if (isInputEmail(action.payload.username)) {
                if (
                    validEmailCheck(action.payload.username) &&
                    passwordComplexityCheck(action.payload.password)
                ) {
                    result = getAuthErrorMessage(state, SUCCESS);
                } else {
                    result = getAuthErrorMessage(state, UNSUCCESSFUL_EMAIL);
                }
            } else {
                if (
                    validUsernameCheck(action.payload.username) &&
                    passwordComplexityCheck(action.payload.password)
                ) {
                    result = getAuthErrorMessage(state, SUCCESS);
                    loginByUsername(action.payload.username, action.payload.password);
                } else {
                    result = getAuthErrorMessage(state, UNSUCCESSFUL_USERNAME);
                }
            }
            state.isAuthenticated = result.isAuthenticated;
            state.message = result.message;
            state.remarks = result.remarks;
        },
        register(state, action) {
            if (
                validNameCheck(action.payload.name) &&
                validUsernameCheck(action.payload.username) &&
                validEmailCheck(action.payload.email) &&
                validContactNumberCheck(action.payload.contactNumber) &&
                passwordComplexityCheck(action.payload.password)
            ) {
                let res: any;
                let resData: any;
                const test = async () => {
                    let testv = await register(action.payload.name, action.payload.username, action.payload.password, action.payload.email, action.payload.contactNumber);
                    console.log("reply", testv.json().then((data: any) => {
                        resData = data
                        console.log(resData)
                    }))
                    console.log("reply2", testv)
                    res = testv;
                }
                test();
                if (res && res.status === 200) {
                    result = getAuthErrorMessage(state, SUCCESS);
                }
                if (res && res.status === 500) {
                    result = {
                        isAuthenticated: BOOLEAN_FALSE,
                        message: "not available",
                        remarks: ''
                    }
                }

            } else {
                if (!passwordComplexityCheck(action.payload.password)) {
                    result = getAuthErrorMessage(state, PASSWORD);
                }
                if (!validContactNumberCheck(action.payload.contactNumber)) {
                    result = getAuthErrorMessage(state, CONTACT_NUMBER);
                }
                if (!validEmailCheck(action.payload.email)) {
                    result = getAuthErrorMessage(state, EMAIL);
                }
                if (!validUsernameCheck(action.payload.username)) {
                    result = getAuthErrorMessage(state, USERNAME);
                }
                if (!validNameCheck(action.payload.name)) {
                    result = getAuthErrorMessage(state, NAME);
                }
            }

            state.isAuthenticated = result.isAuthenticated;
            state.message = result.message;
            state.remarks = result.remarks;
        },
        resetPassword(state, action) {
            if (isInputEmail(action.payload.username)) {
                if (validEmailCheck(action.payload.username)) {
                    result = getAuthErrorMessage(state, VALID_USERNAME_EMAIL);
                } else {
                    result = getAuthErrorMessage(state, INVALID_EMAIL);
                }
            } else {
                if (validUsernameCheck(action.payload.username)) {
                    result = getAuthErrorMessage(state, VALID_USERNAME_EMAIL);
                } else {
                    result = getAuthErrorMessage(state, INVALID_USERNAME_EMAIL);
                }
            }

            state.isAuthenticated = result.isAuthenticated;
            state.message = result.message;
            state.remarks = result.remarks;
        },
        resetInput(state) {
            result = getAuthErrorMessage(state, RESET_INPUT);

            state.isAuthenticated = result.isAuthenticated;
            state.message = result.message;
            state.remarks = result.remarks;
        },
        logout(state) {
            result = getAuthErrorMessage(state, LOGOUT);

            state.isAuthenticated = result.isAuthenticated;
            state.message = result.message;
            state.remarks = result.remarks;
        },
    },
});

// export function actions
export const authActions = authSlice.actions;

// export reducer for store
export default authSlice.reducer;
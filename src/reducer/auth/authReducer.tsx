// @ts-nocheck
import * as authConstants from "../../constants/authConstants.tsx";

const loginReducer = (state, action) => {
  switch (action.type) {
    case authConstants.LOGIN:
      if (action.payload.username.includes("@")) {
        if (
          //eslint-disable-next-line
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.username
          ) &&
          action.payload.password.length > 0
        ) {
          state.isValid = true;
          state.message = "Login Successful!";
          state.feedback = "";
        } else {
          state.isValid = false;
          state.message = "Invalid E-Mail or password";
          state.feedback = "";
        }
      } else {
        //login by username
        if (
          action.payload.username.length > 3 &&
          action.payload.password.length > 5
        ) {
          state.isValid = true;
          state.message = "Login Successful!";
          state.feedback = "";
        } else {
          state.isValid = false;
          state.message = "Invalid username or password";
          state.feedback = "";
        }
      }
      return { ...state };

    case authConstants.REGISTER:
      // SUCCESS CASE
      if (
        action.payload.name.length > 2 &&
        action.payload.username.length > 3 &&
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          action.payload.email
        ) &&
        action.payload.contactNumber.length > 7 &&
        action.payload.password.length > 5
      ) {
        state.isValid = true;
        state.message = "";
        state.feedback = "";
      } else {
        // FAILURE CASE
        if (action.payload.name.length < 3) {
          state.isValid = false;
          state.message = "Please enter your name";
          state.feedback = "name";
        } else if (action.payload.username.length < 4) {
          state.isValid = false;
          state.message = "Please enter your username";
          state.feedback = "username";
        } else if (
          //eslint-disable-next-line
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.email
          )
        ) {
          state.isValid = false;
          state.message = "Please enter your email";
          state.feedback = "email";
        } else if (action.payload.contactNumber.length < 8) {
          state.isValid = false;
          state.message = "Please enter your contact number";
          state.feedback = "contactNumber";
        } else if (action.payload.password.length < 6) {
          state.isValid = false;
          state.message = "Please enter your password";
          state.feedback = "password";
        }
      }
      return { ...state };

    case authConstants.RESET_PASSWORD:
      if (action.payload.username.includes("@")) {
        if (
          //eslint-disable-next-line
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.username
          )
        ) {
          state.isValid = true;
          state.message = "Please check your email to reset your password";
          state.feedback = "success";
        } else {
          state.isValid = false;
          state.message = "You have entered an invalid E-Mail";
          state.feedback = "";
        }
      } else {
        if (action.payload.username.length > 3) {
          state.isValid = true;
          state.message = "Please check your email to reset your password";
          state.feedback = "success";
        }
        if (action.payload.username.length < 4) {
          state.isValid = false;
          state.message = "Please enter a valid username or E-Mail";
          state.feedback = "";
        }
      }
      return { ...state };

    case authConstants.RESET_INPUT:
      state.isValid = false;
      state.message = "";
      state.feedback = "";
      return { ...state }

    default:
      state.isValid = false;
      state.message = "invalid action received";
      state.feedback = "";
      return { ...state }
  }
};

export default loginReducer;

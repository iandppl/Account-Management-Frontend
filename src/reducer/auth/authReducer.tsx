// @ts-nocheck
import * as authConstants from "../../constants/authConstants.tsx";

const loginReducer = (state, action) => {
  switch (action.type) {
    case authConstants.LOGIN:
      // login by email
      if (action.payload.userName.includes("@")) {
        if (
          //eslint-disable-next-line
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.userName
          ) &&
          action.payload.password.length > 0
        ) {
          return {
            isValid: true,
            message: "successful login",
          };
        } else {
          return {
            isValid: false,
            message: "Invalid E-Mail or password",
          };
        }
      } else {
        //login by username
        if (
          action.payload.userName.length > 0 &&
          action.payload.password.length > 0
        ) {
          return {
            isValid: true,
            message: "successful login",
          };
        } else {
          return {
            isValid: false,
            message: "Invalid username or password",
          };
        }
      }
    case authConstants.REGISTER:
      // SUCCESS CASE
      if (
        action.payload.name.length > 0 &&
        action.payload.username.length > 0 &&
        action.payload.email.includes("@") &&
        action.payload.email.length > 0 &&
        action.payload.contactNumber.length > 0 &&
        action.payload.password.length > 0
      ) {
        return {
          isValid: true,
          message: "successful registration",
        };
      } else {
      }

      // FAILURE CASE
      if (action.payload.name.length === 0) {
        return {
          isValid: false,
          message: "Please enter your name",
          feedback: "name",
        };
      }
      if (action.payload.username.length === 0) {
        return {
          isValid: false,
          message: "Please enter your username",
          feedback: "username",
        };
      }
      if (
        !action.payload.email.includes("@") ||
        action.payload.email.length === 0
      ) {
        return {
          isValid: false,
          message: "Please enter your email",
          feedback: "email",
        };
      }
      if (action.payload.contactNumber.length === 0) {
        return {
          isValid: false,
          message: "Please enter your contact number",
          feedback: "contactNumber",
        };
      }
      if (action.payload.password.length === 0) {
        return {
          isValid: false,
          message: "Please enter your password",
          feedback: "password",
        };
      }

    case authConstants.RESET_INPUT:
      return {
        isValid: false,
        message: "",
        feedback: "",
      };
    default:
      return {
        isValid: false,
        message: "Please enter username and password",
        feedback: "",
      };
  }
};

export default loginReducer;

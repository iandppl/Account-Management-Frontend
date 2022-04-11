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
    case authConstants.RESET_INPUT:
      return {
        ...state,
        message: "",
      };
    default:
      return {
        isValid: false,
        message: "Please enter username and password",
      };
  }
};

export default loginReducer;

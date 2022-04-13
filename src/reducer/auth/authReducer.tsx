// @ts-nocheck
import * as authConstants from "../../constants/authConstants.tsx";

const loginReducer = (state, action) => {
  switch (action.type) {
    case authConstants.LOGIN:
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
        action.payload.name.length > 2 &&
        action.payload.userName.length > 3 &&
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          action.payload.userName
        ) &&
        action.payload.contactNumber.length > 7 &&
        action.payload.password.length > 5
      ) {
        console.log("SUCCESS");
        return {
          isValid: true,
          message: "",
        };
      } else {
        // FAILURE CASE
        if (action.payload.name.length < 3) {
          return {
            isValid: false,
            message: "Please enter your name",
            feedback: "name",
          };
        }
        if (action.payload.userName.length < 4) {
          return {
            isValid: false,
            message: "Please enter your username",
            feedback: "username",
          };
        }
        if (
          //eslint-disable-next-line
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.email
          )
        ) {
          return {
            isValid: false,
            message: "Please enter your email",
            feedback: "email",
          };
        }
        if (action.payload.contactNumber.length < 8) {
          return {
            isValid: false,
            message: "Please enter your contact number",
            feedback: "contactNumber",
          };
        }
        if (action.payload.password.length < 6) {
          return {
            isValid: false,
            message: "Please enter your password",
            feedback: "password",
          };
        }
      }

    case authConstants.RESET_PASSWORD:
      if (action.payload.userName.includes("@")) {
        if (
          //eslint-disable-next-line
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            action.payload.userName
          )
        ) {
          return {
            isValid: true,
            message: "Please check your email to reset your password",
            feedback: "success",
          };
        } else {
          return {
            isValid: false,
            message: "You have entered an invalid E-Mail",
          };
        }
      } else {
        if (action.payload.userName.length > 3) {
          return {
            isValid: true,
            message: "Please check your email to reset your password",
            feedback: "success",
          };
        }
        if (action.payload.userName.length < 4) {
          return {
            isValid: false,
            message: "Please enter a valid username or E-Mail",
            feedback: "",
          };
        }
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

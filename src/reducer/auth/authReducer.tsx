// @ts-nocheck
import {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  RESET_INPUT,
  NAME,
  USERNAME,
  EMAIL,
  PASSWORD,
  CONTACT_NUMBER,
  SUCCESS,
  UNSUCCESSFUL,
  UNSUCCESSFUL_EMAIL,
  UNSUCCESSFUL_USERNAME,
  INVALID_EMAIL,
  INVALID_USERNAME_EMAIL,
  VALID_USERNAME_EMAIL,
} from "../../constants/authConstants.tsx";

import {
  isInputEmail,
  validEmailCheck,
  passwordComplexityCheck,
  validUsernameCheck,
  validContactNumberCheck,
  validNameCheck,
  getAuthErrorMessage,
} from "./authActions/actions.tsx";

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      if (isInputEmail(action.payload.username)) {
        if (
          validEmailCheck(action.payload.username) &&
          passwordComplexityCheck(action.payload.password)
        ) {
          return getAuthErrorMessage(SUCCESS);
        } else {
          return getAuthErrorMessage(UNSUCCESSFUL_EMAIL);
        }
      } else {
        //login by username
        if (
          validUsernameCheck(action.payload.username) &&
          passwordComplexityCheck(action.payload.password)
        ) {
          return getAuthErrorMessage(SUCCESS);
        } else {
          return getAuthErrorMessage(UNSUCCESSFUL_USERNAME);
        }
      }
    case REGISTER:
      // SUCCESS CASE
      if (
        validNameCheck(action.payload.name) &&
        validUsernameCheck(action.payload.username) &&
        validEmailCheck(action.payload.email) &&
        validContactNumberCheck(action.payload.contactNumber) &&
        passwordComplexityCheck(action.payload.password)
      ) {
        return getAuthErrorMessage(SUCCESS);
      } else {
        // FAILURE CASE
        if (!validNameCheck(action.payload.name)) {
          return getAuthErrorMessage(NAME);
        }
        if (!validUsernameCheck(action.payload.username)) {
          return getAuthErrorMessage(USERNAME);
        }
        if (!validEmailCheck(action.payload.email)) {
          return getAuthErrorMessage(EMAIL);
        }
        if (!validContactNumberCheck(action.payload.contactNumber)) {
          return getAuthErrorMessage(CONTACT_NUMBER);
        }
        if (!passwordComplexityCheck(action.payload.password)) {
          return getAuthErrorMessage(PASSWORD);
        }
      }
      break;
    case RESET_PASSWORD:
      if (isInputEmail(action.payload.username)) {
        if (validEmailCheck(action.payload.email)) {
          return getAuthErrorMessage(VALID_USERNAME_EMAIL);
        } else {
          return getAuthErrorMessage(INVALID_EMAIL);
        }
      } else {
        if (validUsernameCheck(action.payload.username)) {
          return getAuthErrorMessage(VALID_USERNAME_EMAIL);
        } else {
          return getAuthErrorMessage(INVALID_USERNAME_EMAIL);
        }
      }

    case RESET_INPUT:
      return getAuthErrorMessage(UNSUCCESSFUL);

    default:
      return getAuthErrorMessage(UNSUCCESSFUL);
  }
};

export default loginReducer;

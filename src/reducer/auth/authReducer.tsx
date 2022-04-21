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
          return getAuthErrorMessage(state, SUCCESS);
        } else {
          return getAuthErrorMessage(state, UNSUCCESSFUL_EMAIL);
        }
      } else {
        //login by username
        if (
          validUsernameCheck(action.payload.username) &&
          passwordComplexityCheck(action.payload.password)
        ) {
          return getAuthErrorMessage(state, SUCCESS);
        } else {
          return getAuthErrorMessage(state, UNSUCCESSFUL_USERNAME);
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
        return getAuthErrorMessage(state, SUCCESS);
      } else {
        // FAILURE CASE
        if (!validNameCheck(action.payload.name)) {
          return getAuthErrorMessage(state, NAME);
        }
        if (!validUsernameCheck(action.payload.username)) {
          return getAuthErrorMessage(state, USERNAME);
        }
        if (!validEmailCheck(action.payload.email)) {
          return getAuthErrorMessage(state, EMAIL);
        }
        if (!validContactNumberCheck(action.payload.contactNumber)) {
          return getAuthErrorMessage(state, CONTACT_NUMBER);
        }
        if (!passwordComplexityCheck(action.payload.password)) {
          return getAuthErrorMessage(state, PASSWORD);
        }
      }
      break;
    case RESET_PASSWORD:
      if (isInputEmail(action.payload.username)) {
        if (validEmailCheck(action.payload.email)) {
          return getAuthErrorMessage(state, VALID_USERNAME_EMAIL);
        } else {
          return getAuthErrorMessage(state, INVALID_EMAIL);
        }
      } else {
        if (validUsernameCheck(action.payload.username)) {
          return getAuthErrorMessage(state, VALID_USERNAME_EMAIL);
        } else {
          return getAuthErrorMessage(state, INVALID_USERNAME_EMAIL);
        }
      }

    case RESET_INPUT:
      return getAuthErrorMessage(state, UNSUCCESSFUL);

    default:
      return getAuthErrorMessage(state, UNSUCCESSFUL);
  }
};

export default loginReducer;

import {
  isInputEmail,
  passwordComplexityCheck,
  validEmailCheck,
  validUsernameCheck,
} from "../common/validations";

export const login = (username: string, password: string) => {
  if (isInputEmail(username)) {
    if (validEmailCheck(username) && passwordComplexityCheck(password)) {
      console.log("LOGGED IN");
    } else {
      throw new Error("Invalid email or password");
    }
  } else {
    if (validUsernameCheck(username) && passwordComplexityCheck(password)) {
      console.log("LOGGED IN");
    } else {
      throw new Error("Invalid username or password");
    }
  }
};

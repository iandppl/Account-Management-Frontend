import {
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
  BOOLEAN_TRUE,
} from "../../../constants/authConstants";

export const isInputEmail = (username: string) => {
  return username.includes("@");
};

export const validEmailCheck = (username: string) => {
  //eslint-disable-next-line
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);
};

// at least 1 lower, 1 upper, 1 digit, 1 special character, min 8 characters
export const passwordComplexityCheck = (password: string) => {
  //eslint-disable-next-line
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/g.test(
    password
  );
};

export const validUsernameCheck = (username: string) => {
  return username.length > 3;
};

export const validNameCheck = (name: string) => {
  return name.length > 2;
};

// 8 digits only
export const validContactNumberCheck = (contactNumber: string) => {
  return /^\d{8}$/.test(contactNumber);
};

export const getAuthErrorMessage = (state: any, type: string) => {
  switch (type) {
    case NAME:
      return {
        ...state,
        message: "Please enter your name",
        feedback: "name",
      };
    case USERNAME:
      return {
        ...state,
        message: "Please enter your username",
        feedback: "username",
      };
    case EMAIL:
      return {
        ...state,
        message: "Please enter a valid email",
        feedback: "email",
      };
    case PASSWORD:
      return {
        ...state,
        message:
          "Password should contain at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and at least 8 characters long",
        feedback: "password",
      };
    case CONTACT_NUMBER:
      return {
        ...state,
        message: "Please enter a valid contact number",
        feedback: "contactNumber",
      };
    case UNSUCCESSFUL:
      return {
        ...state,
        message: "",
        feedback: "",
      };
    case UNSUCCESSFUL_USERNAME:
      return {
        ...state,
        message: "Invalid username or password",
        feedback: "",
      };
    case UNSUCCESSFUL_EMAIL:
      return {
        ...state,
        message: "Invalid e-mail or password",
        feedback: "",
      };
    case INVALID_EMAIL:
      return {
        ...state,
        message: "You have entered an invalid E-Mail",
        feedback: "",
      };
    case INVALID_USERNAME_EMAIL:
      return {
        ...state,
        message: "Please enter a valid username or E-Mail",
        feedback: "",
      };
    case VALID_USERNAME_EMAIL:
      return {
        isValid: BOOLEAN_TRUE,
        message: "Please check your email to reset your password",
        feedback: "success",
      };
    case SUCCESS:
      return {
        isValid: BOOLEAN_TRUE,
        message: "",
        feedback: "",
      };
    default:
      return {
        ...state,
        message: "",
        feedback: "",
      };
  }
};

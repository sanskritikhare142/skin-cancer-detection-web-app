import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/constants";

export const postSignup = async (values: any) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}signup`,
      data: values,
    });
    console.log("Hey api.tsx", _res);
    return true;
  } catch (err) {
    console.log(err);
    errorHandler(err);
    return false;
  }
};
export const postLogin = async (values: any) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}login`,
      data: values,
    });
    console.log("Hey api.tsx", _res);
    return true;
  } catch (err) {
    errorHandler(err);
    console.log(err);
    return false;
  }
};
export const postPicture = async (imageUrl: any) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}uploader`,
      data: imageUrl,
    });
    successHandler("🎉 Your profile image is updated successfully!");
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};
export const successHandler = (successMessage: string) => {
  toast.success(successMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
export const errorHandler = (error?: AxiosError | any) => {
  let errMessage: string = "Oops! Something went wrong!";
  if (error) {
    switch (error.response?.status) {
      case 401:
        errMessage = "Uh oh! Invalid credentials, please try again!";
        break;
      case 400:
        errMessage = "User already exists, try logging in!";
        break;
      case 403:
        errMessage = "Uh oh! Passwords don't match";
        break;
      default:
        errMessage = "Oops! Something went wrong!";
        break;
    }

    toast.error(errMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    console.log("Hello");
  }
};

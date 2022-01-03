import axios from "axios";
import {
  USER_RGISTER,
  USER_FAIL,
  GET_USER,
  USER_LOGIN,
  LOG_OUT,
} from "../Types";
export const register = (formData, navigate) => async (dispatch) => {
  try {
    console.log("formdata", formData);

    const response = await axios.post(
      "http://localhost:9000/auth/register",
      formData
    );
    dispatch({ type: USER_RGISTER, payload: response.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: USER_FAIL });
    console.log(error);
    /* error.response.data.errors.map(err=>alert(err.msg))  */
  }
};
export const getUser = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const response = await axios.get(
      "http://localhost:9000/auth/current",
      config
    );
    console.log(response.data);
    dispatch({ type: GET_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_FAIL });
    error.response.data.errors.map((err) => alert(err.msg));
  }
};
export const login = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:9000/auth/login", user);
    dispatch({ type: USER_LOGIN, payload: response.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: USER_FAIL });
    error.response.data.errors.map((err) => alert(err.msg));
  }
};
export const logOut = () => {
  return { type: LOG_OUT };
};

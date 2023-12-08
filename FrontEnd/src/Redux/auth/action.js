import * as types from "./types";
import axios from "axios";

//login user
export const StaffLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_STAFF_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/staffs/login",
      data
    );
    console.log(res.data);
    dispatch({
      type: types.LOGIN_STAFF_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_STAFF_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//login user
export const AdminLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_ADMIN_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/admin/login",
      data
    );
    console.log(res.data);
    dispatch({
      type: types.LOGIN_ADMIN_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_ADMIN_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// REGISTER STAFF
export const StaffRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_STAFF_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/staffs/register",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.REGISTER_DOCTOR_SUCCESS,
    //   payload: {
    //     message: res.data.message,
    //     user: res.data.user,
    //     // token: res.data.token,
    //     report: res.data.report,
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.REGISTER_STAFF_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// REGISTER ADMIN
export const AdminRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_ADMIN_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/admin/register",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.REGISTER_ADMIN_SUCCESS,
    //   payload: {
    //     message: res.data.message,
    //     user: res.data.user,
    //     // token: res.data.token,
    //     report: res.data.report,
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.REGISTER_ADMIN_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// logout user
export const authLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: types.AUTH_LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

//update staff
export const UpdateStaff = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_STAFF_REQUEST });
    const res = await axios.patch(
      `https://sore-pear-squid-wig.cyclic.app/staffs/${id}`,
      data
    );
    console.log(res);
    dispatch({ type: types.EDIT_STAFF_SUCCESS, payload: res.data.user });
  } catch (error) {
    console.log(error);
  }
};

import * as types from "./types";
import axios from "axios";

// CreateReport
export const CreateReport = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_REPORT_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/reports/create",
      data
    );
    console.log(res);
    return res.data;
  } catch (error) {
    dispatch({
      type: types.CREATE_REPORT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET STAFF DETAILS
export const GetStaffDetails = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_STAFF_REQUEST });
    const res = await axios.get(
      "https://sore-pear-squid-wig.cyclic.app/staffs"
    );
    console.log(res);
  } catch (error) {
    dispatch({
      type: types.GET_STAFF_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//ADD PATIENTS
export const AddPatients = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_PATIENT_REQUEST });
    const res = await axios.post(
      "https://sore-pear-squid-wig.cyclic.app/patients/register",
      data
    );
    return res.data;
  } catch (error) {
    dispatch({
      type: types.ADD_PATIENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//GET MEDS
export const GetMeds = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_MED_REQUEST });
    const res = await axios.get("https://sore-pear-squid-wig.cyclic.app/meds");
    console.log(res);
    dispatch({
      type: types.GET_MED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_MED_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET ALL PATIENT
export const GetPatients = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_PATIENT_REQUEST });
    const res = await axios.get(
      `https://sore-pear-squid-wig.cyclic.app/patients`
    );
    console.log(res.data);
    dispatch({
      type: types.GET_PATIENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL DATA
export const GetAllData = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ALLDATA_REQUEST });
    const res = await axios.get(
      `https://sore-pear-squid-wig.cyclic.app/hospitals`
    );
    console.log(res.data);
    dispatch({
      type: types.GET_ALLDATA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL REPORTS
export const GetAllReports = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_REPORTS_REQUEST });
    const res = await axios.get(
      `https://sore-pear-squid-wig.cyclic.app/reports`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

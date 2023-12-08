import * as types from "./types";

const initialState = {
  loading: false,
  error: false,
  reports: [],
  meds: [],
  staffs: [],
  patients: [],
  dashboard: [],
};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_MED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MED_SUCCESS:
      return {
        ...state,
        loading: false,
        meds: payload,
      };
    case types.GET_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        patients: payload,
      };
    case types.GET_ALLDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboard: payload,
      };
    default:
      return state;
  }
}

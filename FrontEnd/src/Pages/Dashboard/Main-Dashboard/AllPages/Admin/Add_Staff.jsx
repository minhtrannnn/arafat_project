import React, { useState } from "react";
import "./CSS/Add_Staff.css";
import { useDispatch, useSelector } from "react-redux";
import { StaffRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddStaff = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initData = {
    staffName: "",
    staffRole:"",
    age: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    staffID: Date.now(),
    password: "",
    details: "",
  };
  const [StaffValue, setStaffValue] = useState(initData);

  const HandleStaffChange = (e) => {
    setStaffValue({ ...StaffValue, [e.target.name]: e.target.value });
  };

  const HandleStaffSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(StaffRegister(StaffValue)).then((res) => {
      if (res.message === "Staff already exists") {
        setLoading(false);
        return notify("Staff Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }

      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.staffID,
      };
      console.log(data, "STAFF REGISTER SUCCESSFULLY");
      dispatch().then((res) => notify("Account Detais Sent"));
      setLoading(false);
      setStaffValue(initData);
    });
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Staff_div">
            <h1>Add Staff</h1>
            <form onSubmit={HandleStaffSubmit}>
              <div>
                <label>Staff Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="staffName"
                    value={StaffValue.staffName}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={StaffValue.age}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Emergency Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={StaffValue.mobile}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={StaffValue.email}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={StaffValue.gender}
                    onChange={HandleStaffChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={StaffValue.bloodGroup}
                    onChange={HandleStaffChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={StaffValue.DOB}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={StaffValue.address}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={StaffValue.education}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className="inputdiv">
                  <select
                    name="department"
                    value={StaffValue.department}
                    onChange={HandleStaffChange}
                    required
                  >
                    <option value="General">Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="ENT">ENT</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={StaffValue.password}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Details</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={StaffValue.details}
                    onChange={HandleStaffChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStaff;

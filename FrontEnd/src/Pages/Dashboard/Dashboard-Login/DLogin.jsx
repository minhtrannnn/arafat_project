import React, { useState } from "react";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLogin, StaffLogin } from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DLogin.css";

const notify = (text) => toast(text);

const DLogin = () => {
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Staff");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Staff") {
        let data = {
          ...formvalue,
          staffID: formvalue.ID,
        };
        console.log(data);
        dispatch(StaffLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          else if(res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <>
      <ToastContainer />

      <div className="mainLoginPage">
        <div className="center">
          <h1>Login Portal</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Staff" className={"radiobutton"}>
                Staff
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>Username ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;

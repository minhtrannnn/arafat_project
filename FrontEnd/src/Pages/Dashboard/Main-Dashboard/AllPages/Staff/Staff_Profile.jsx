import React, { useEffect, useState } from "react";
import "../Staff/CSS/Staff_Profile.css";
import { BiTime } from "react-icons/bi";
import { GiMeditation } from "react-icons/gi";
import { AiFillCalendar, AiFillEdit } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsHouseFill, BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaRegHospital, FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Modal } from "antd";
import { UpdateStaff} from "../../../../../Redux/auth/action";
import { GetStaffDetails } from "../../../../../Redux/Datas/action";
import { Navigate } from "react-router-dom";
import "./CSS/Staff_Profile.css";

// *********************************************************
const Staff_Profile = () => {
  const { data } = useSelector((store) => store.auth);

  const disptach = useDispatch();

  useEffect(() => {
    disptach(GetStaffDetails());
  }, []);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    staffName: data.user.staffName,
    age: data.user.age,
    gender: data.user.gender,
    bloodGroup: data.user.bloodGroup,
    education: data.user.education,
    mobile: data.user.mobile,
    DOB: data.user.DOB,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    disptach(UpdateStaff(formData, data.user._id));
    success("User Updated");
    handleOk();
  };

  if (data?.isAuthticated === true) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "staff") {
    return <Navigate to={"/dashboard"} />;
  }
  
  return (
    <>
      {contextHolder}
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainstaffProfile">
            <div className="firstBox">
              <div>
                <img src={'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg'} alt="avatar" />
              </div>
              <br></br>
              <div className="singleitemdiv">
                <GiMeditation className="singledivicons" />
                <p>{data?.user?.staffName}</p>
              </div>
              <div className="singleitemdiv">
                <MdBloodtype className="singledivicons" />
                <p>{data?.user?.bloodGroup}</p>
              </div>
              <div className="singleitemdiv">
                <FaBirthdayCake className="singledivicons" />
                <p>{data?.user?.DOB}</p>
              </div>
              <div className="singleitemdiv">
                <BsFillTelephoneFill className="singledivicons" />
                <p>{data?.user?.mobile}</p>
              </div>
              <div className="singleitemdiv">
                <button onClick={showModal}>
                  {" "}
                  <AiFillEdit />
                  Edit profile
                </button>
              </div>

              <Modal
                title="Edit details"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="submit" onClick={handleFormSubmit}>
                    Edit
                  </Button>,
                ]}
              >
                <form className="inputForm">
                  <input
                    name="staffName"
                    value={formData.staffName}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="Age"
                  />
                  <select name="gender" onChange={handleFormChange}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </select>
                  <input
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Blood Group"
                  />
                  <input
                    name="education"
                    value={formData.education}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="education"
                  />
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="mobile"
                  />
                  <input
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleFormChange}
                    type="date"
                    placeholder="Date of birth"
                  />
                </form>
              </Modal>
            </div>
            {/* ***********  Second Div ******************** */}
            <div className="SecondBox">
              <div className="subfirstbox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Other Info
                </h2>
                <div className="singleitemdiv">
                  <BsGenderAmbiguous className="singledivicons" />
                  <p>{data?.user?.gender}</p>
                </div>
                <div className="singleitemdiv">
                  <AiFillCalendar className="singledivicons" />
                  <p>{data?.user?.age}</p>
                </div>

                <div className="singleitemdiv">
                  <MdOutlineCastForEducation className="singledivicons" />
                  <p>{data?.user?.education}</p>
                </div>
                <div className="singleitemdiv">
                  <BsHouseFill className="singledivicons" />
                  <p>{data?.user?.address}</p>
                </div>
              </div>
              
              {/* ***********  Third Div ******************** */}
              <div className="subSecondBox">
                <h2 style={{ textAlign: "center"}}>
                  Hospital Details
                </h2>
                <div style={{marginTop: "20px"}}></div>
                <div className="singleitemdiv">
                  <BiTime className="singledivicons" />
                  <p>Working Hours: 09:00 AM - 20:00 PM (EST)</p>
                </div>
                <div className="singleitemdiv">
                  <FaRegHospital className="singledivicons" />
                  <p>MC Hospitals</p>
                </div>
                <div className="singleitemdiv">
                  <FaMapMarkedAlt className="singledivicons" />
                  <p>
                    Purdue University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff_Profile;

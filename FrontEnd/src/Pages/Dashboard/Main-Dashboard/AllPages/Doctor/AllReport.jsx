import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllReports } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const AllReport = () => {
  const dispatch = useDispatch();
  const [Report, setReport] = useState();
  useEffect(() => {
    dispatch(GetAllReports()).then((res) => {
      setReport(res);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Sidebar />

        {/* ************************************ */}

        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Reports</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Department</th>
                    <th>Patient Mobile</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Disease</th>
                    <th>Prescription</th>
                    <th>Weight</th>
                    <th>Temperature</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {Report?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patientName}</td>
                        <td>Minh An</td>
                        <td>{ele.docDepartment}</td>
                        <td>{ele.patientMobile}</td>
                        <td>{ele.patientAge}</td>
                        <td>{ele.patientGender}</td>
                        <td>{ele.patientDisease}</td>
                        <td>
                          {ele.extrainfo}:<br />
                          {ele.medicines?.map((detail, index) => (
                            <div key={index}>
                              <p>Medicine: {detail.medName} / Dosage: {detail.dosage}</p>
                            </div>
                          ))}
                        </td>
                        <td>{ele.patientWeight}</td>
                        <td>{ele.patientTemperature}</td>
                        <td>{ele.date}  {ele.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReport;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GetMeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Inventory_Display = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const { meds } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(GetMeds());
  }, [dispatch]);

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div>
            <h1 style={{ marginBottom: "2rem" }}>Inventory Overview</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Provider</th>
                    <th>Expiration Date</th>
                    <th>Location</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {meds?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.medication}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.quantity}</td>
                        <td
                          style={{
                            color:
                              ele.status === "available" ? "green" : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {ele.status}
                        </td>
                        <td style={{ marginLeft: "1rem" }}>{ele.provider}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.date}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.location}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.price}</td>
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

export default Inventory_Display;

import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Add_Admin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Admin";
import Add_Staff from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Staff";
import Inventory_Display from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Inventory_Display";
import Create_Report from "../Pages/Dashboard/Main-Dashboard/AllPages/Staff/Create_Report";
import All_Report from "../Pages/Dashboard/Main-Dashboard/AllPages/Staff/All_Report";
import Staff_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Staff/Staff_Profile";
import Add_Patient from "../Pages/Dashboard/Main-Dashboard/AllPages/Staff/Add_Patient";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        ******************** Admin *************************
        <Route path="/addstaff" element={<Add_Staff />} />
        <Route path="/inventory" element={<Inventory_Display />} />
        <Route path="/admin" element={<Add_Admin />} />
        ******************** Staff *************************
        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/createreport" element={<Create_Report />} />
        <Route path="/reports" element={<All_Report />} />
        <Route path="/staffprofile" element={<Staff_Profile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

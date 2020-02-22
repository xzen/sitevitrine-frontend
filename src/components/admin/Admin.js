import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import AdminHome from "../admin/AdminHome";
import AdminRdv from "../admin/AdminRdv";
import AdminBlog from "../admin/AdminBlog";

const Admin = props => {
  return (
    <>
      <NavbarAdmin />
      <AdminHome />
      <AdminRdv />
      <AdminBlog />
      <Footer />
    </>
  );
};

export default Admin;

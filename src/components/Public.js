import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Modal from "./admin/modal/"

const Public = () => (
  <>
    <Navbar />
    <Home />
    <Blog />
    <Testimonials />
    <Modal />
    <Footer />
  </>
);

export default Public;

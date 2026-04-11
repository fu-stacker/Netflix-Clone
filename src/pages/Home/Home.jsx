import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";
function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}

export default Home;

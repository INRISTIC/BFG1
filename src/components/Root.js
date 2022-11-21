import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import Donat from "./Pages/Donat/Donat";
import PersonalStatistics from "./Pages/PersonalStatistics/PersonalStatistics";
import Information from "./Pages/Information/Information";
import Error from "./Pages/Error/Error";

import Layout from "./Layout/Layout";

import "../assets/fonts/rubik.css"
import "./Root.css";



function Root() {

  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/donat" element={<Donat />} />
          <Route path="/stat" element={<PersonalStatistics />} />
          <Route path="/info" element={<Information />} />
          <Route path="/terms-of-use" element={<Information />} />
          <Route path="/user-conditions" element={<Information />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Root;

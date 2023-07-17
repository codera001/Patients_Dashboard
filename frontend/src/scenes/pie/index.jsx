import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Topbar from "../global/Topbar";
import Sidebars from "../global/Sidebars";
import React, { useState, useEffect } from 'react'

const Pie = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
       <div className="app">
    <Sidebars isSidebar={isSidebar} /> 
    <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
    </main>
    </div>
    </>
  );
};

export default Pie;

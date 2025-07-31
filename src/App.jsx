import React, { Fragment } from "react";
import Navbar from "./Components/Navbar"
import Table from "./Components/Table"
import Footer from "./Components/Footer";

function App() {
  const items = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <Fragment>
    <Navbar/>
    <Table items = {items} heading="Dynamic List"/> 
    <Footer/> 

    </Fragment>
  )
}

export default App
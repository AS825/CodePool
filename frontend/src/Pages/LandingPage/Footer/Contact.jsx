import React from "react";
import "./Contact.css";
import ColumnRight from "./ColumnRight";
import ColumnLeft from "./ColumnLeft";
import Lydia from "../../../assets/Lydia.png";
import Sigrid from "../../../assets/Sigrid.png";
import Isabella from "../../../assets/Isabella.png";

function Contact() {
  return (
    <div>
      <ColumnRight className={"right"} imgSrc={Sigrid} />
      <ColumnLeft className={"left"} imgSrc={Lydia} />
      <ColumnRight className={"right"} imgSrc={Isabella} />
    </div>
  );
}

export default Contact;

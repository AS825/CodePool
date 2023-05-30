import React from "react";
import "./Contact.css";
import ColumnRight from "./ColumnRight";
import ColumnLeft from "./ColumnLeft";

function Contact({ officePersonal }) {
  return (
    <div>
      <ColumnRight
        className={"right"}
        imgSrc={officePersonal[0].imageSource}
        person={officePersonal[0]}
      />
      <ColumnLeft
        className={"left"}
        imgSrc={officePersonal[1].imageSource}
        person={officePersonal[1]}
      />
      <ColumnRight
        className={"right"}
        imgSrc={officePersonal[2].imageSource}
        person={officePersonal[2]}
      />
    </div>
  );
}

export default Contact;

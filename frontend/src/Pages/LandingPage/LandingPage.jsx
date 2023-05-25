import { useState, useEffect } from "react";
import { fetchMessage } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import Header from "./Header/Header";
import Body from "./Body/Body";

const LandingPage = () => {
  const [message, setMessage] = useState();
  const [graduates, setGraduates] = useState([
    {
      name: "name",
      position: "position",
      company_name: "company_name",
      imgSrc:
        "https://firmen.wko.at/upload_images/d1363cba-badf-42b3-b8d7-92f539974e12/15112491-261e-4e11-b09f-0d0e0bfbfb67.jpg",
    },
    {
      name: "name",
      position: "position",
      company_name: "company_name",
      imgSrc:
        "https://media.licdn.com/dms/image/C4E0BAQEsN8xVbs8mkg/company-logo_200_200/0/1643112592534?e=2147483647&v=beta&t=_0hBMbidcSm7S_WKhnSXXt5m0k6YENqCcJg9Fi0ujOk",
    },
  ]);

  useEffect(() => {
    //fetchMessage().then((data) => setGraduates(data));
    //fetchMessage().then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div className="welcomePage">
        <Header />
        <Body graduates={graduates} />
      </div>
    </>
  );
};

export default LandingPage;

import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="containerE ">
      <div className="Error-anim">
        <article className="content ">
          <p>I can't see no students here ,</p>
          <p>
            You got lost in the <strong>404</strong> galaxy.
          </p>
          <div className="center-btn ">
          <Link to="/">
          <button className="box">CodePool</button>
          </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ErrorPage;

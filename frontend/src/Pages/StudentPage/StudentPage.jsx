import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStudent } from "../../Utils/fetchMethods";
import "./StudentPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360) + 360;
  const saturation = Math.floor(Math.random() * 41) + 60;
  const lightness = Math.floor(Math.random() * 21) + 61;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function StudentPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const bgStyle = {
    cursor: "pointer",
    width: "350px",
    aspectRatio: "1/1",
    "--bg": getRandomColor(),
    "--accent": "hsl(0, 0%, 100%)",
    transition: "0.2s",
    background: `radial-gradient(circle at top left, var(--accent), transparent 75%), var(--bg)`,
    margin: "0",
    position: "relative",
    overflow: "hidden",
    borderRadius: "1.5rem",
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    fetchStudent(id).then((data) => {
      setStudent(data);
    });
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="student-details-container">
        <div className="student-details-container-left">
          <article data-aos="fade-right" className="article-container">
            <figure style={bgStyle}>
              <img
                className="card-img-student"
                src="https://assets.codepen.io/605876/person.png"
                alt=""
              />
            </figure>
          </article>
          <h1 data-aos="fade-left">Name: {student.name}</h1>
          <table data-aos="zoom-in-up"  className="unstyledTable">
            <thead></thead>
            <tbody>
              <tr>
                <td className="Uppercase">PROJECT</td>
                <td className="table-info">{student.project}</td>
              </tr>
              <tr>
                <td className="Uppercase">AGE:</td>
                <td className="table-info">25</td>
              </tr>
              <tr>
                <td className="Uppercase">GENDER:</td>
                <td className="table-info">male</td>
              </tr>
              {/* <tr>
                <td className="Uppercase">Mood:</td>
                <td className="table-info">Exited</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div data-aos="zoom-in-left" className="student-details-container-right">
          <h1 className="journey-header"> My Journey</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
            qui doloremque distinctio similique! Ratione qui tenetur corrupti
            dicta veniam obcaecati! At quam, porro omnis blanditiis veniam
            ratione, dicta tenetur impedit alias qui, cum adipisci asperiores
            amet consequatur laboriosam cupiditate! Quia perspiciatis
            exercitationem, assumenda eum nulla dolorum est iure veritatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            atque asperiores quisquam beatae accusamus molestias earum. Vero rem
            libero aliquam veniam nihil enim sapiente odit magnam vitae, ducimus
            voluptatibus deleniti sequi dicta harum dolor obcaecati quo aperiam
            non quasi omnis, corrupti sint! Architecto numquam dolorem molestiae
            earum ea hic mollitia.
          </span>
          <h1> My Project</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
            qui doloremque distinctio similique! Ratione qui tenetur corrupti
            dicta veniam obcaecati! At quam, porro omnis blanditiis veniam
            ratione, dicta tenetur impedit alias qui, cum adipisci asperiores
            amet consequatur laboriosam cupiditate! Quia perspiciatis
            exercitationem, assumenda eum nulla dolorum est iure veritatis.
            <br />
          </span>
        </div>
      </div>
      <div  data-aos="fade-up" className="link-container">
        <Link to={`/students/`}>
          <button className="box">Back to all Students</button>
        </Link>

        <Link to={`/contact/${id}`}>
          <button className="box">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentPage;

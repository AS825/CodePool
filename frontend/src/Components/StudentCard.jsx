/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getRandomHSL } from '../logic/colors';
import { getRandomEffect } from '../logic/effects';
import { getIdFromHref } from '../logic/paths';

export default function StudentCard({ student }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const href = student._links.student.href;
  const studentId = getIdFromHref(href);

  const bgStyle = {
    cursor: 'pointer',
    width: '350px',
    aspectRatio: '1/1',
    '--bg': getRandomHSL(),
    '--accent': 'hsl(0, 20%, 70%)',
    transition: '0.2s',
    background: `radial-gradient(circle at top left, var(--accent), transparent 75%), var(--bg)`,
    margin: '0',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1.5rem',
  };
  const maxDescriptionLength = 45;
  const truncatedDescription =
    student.description.length > maxDescriptionLength
      ? student.description.substring(0, 30) + '...'
      : student.description;

  const randomEffect = getRandomEffect();

  return (
    <>
      <div>
        <article data-aos={randomEffect}>
          <figure style={bgStyle}>
            <Link to={`/students/${studentId}`}>
              <img className='card-img' src='https://assets.codepen.io/605876/person.png' alt='' />
            </Link>
          </figure>
          <h2>{student.name}</h2>
          <p className='student-description'>{truncatedDescription}</p>
        </article>
      </div>
    </>
  );
}

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStudent } from '../Utils/fetchMethods';
import { URL_STUDENT_NOT_FOUND } from '../data/constants_url';

export function useStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudent(id)
      .then(data => setStudent(data))
      .error(error => navigate(URL_STUDENT_NOT_FOUND));
  }, [id]);

  return student;
}

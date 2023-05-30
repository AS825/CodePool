import {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
import { postStudent } from '../../Utils/fetchMethods';
import StudentForm from './StudentForm/StudentForm';

const StudentCreator = () => {
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false); 

  const createStudent = (student) => {
    setLoading(true); 
    postStudent(student)
      .then(() => {
        navigate("/");
        setLoading(false); 
      })
      .catch(error => {
        throw error; 
      });
  };

  const performCancelling = () => {
    navigate("/");
  }

  return (
    <StudentForm
      onSubmit={createStudent}
      onCancel={performCancelling}
      disabled={loading}
    />
  );
};

export default StudentCreator
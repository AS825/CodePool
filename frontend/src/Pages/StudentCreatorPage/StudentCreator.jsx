import { useNavigate } from 'react-router-dom';
import { postStudent } from '../../Utils/fetchMethods';
import StudentForm from './StudentForm/StudentForm';

const StudentCreator = () => {
  const navigate = useNavigate(); 

  const createStudent = (student) => {
    postStudent(student)
      .then(() => {
        navigate("/students/create");
        console.log("student: ", student); 
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
    />
  );
};

export default StudentCreator
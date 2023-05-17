const StudentCard = ({student}) => {
  return (
    <div className="student-card">
        <div className="header-section">
            <img src={student.src} alt="" className="student-image"/> 
        </div>
        <div className="body-section">
            <div className="name"> {student.name} </div>
            <div className="tasks"> {student.tasks}</div>
        </div>
        <div></div>

    </div>
  )
}

export default StudentCard
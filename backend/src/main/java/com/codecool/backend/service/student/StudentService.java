package com.codecool.backend.service.student;

import com.codecool.backend.model.entity.Student;
import com.codecool.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(long id) throws StudentNotFoundException {
        return studentRepository.findById(id)
                .orElseThrow(StudentNotFoundException::new);
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudentById(long id, Student student) throws StudentNotFoundException {
        Student existingStudent = getStudentById(id);
        return updateStudent(student, existingStudent);
    }

    private Student updateStudent(Student student, Student existingStudent) {
        existingStudent.setName(student.getName());
        existingStudent.setDescription(student.getDescription());
        existingStudent.setProject(student.getProject());
        existingStudent.setImgSrc(student.getImgSrc());
        return studentRepository.save(existingStudent);
    }

    //todo: Ask Ell how to update a student in the best way
    public Student updateStudent1(Student student) throws StudentNotFoundException {
        Student existingStudent = getStudentById(student.getId());
        deleteStudent(student.getId());
        return saveStudent(student);
    }

    public void deleteStudent(long id) {
        studentRepository.deleteById(id);
    }

}

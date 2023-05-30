import axios from "axios";

const pathGraduates = "http://localhost:8080/graduates";
const pathOfficePersonal = "http://localhost:8080/office-personal";

export const fetchGraduates = async () => {
  try {
    const response = await axios.get(pathGraduates);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchOfficePersonal = async () => {
  try {
    const response = await axios.get(pathOfficePersonal);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};
export const fetchStudents = async () => {
  try {
    const response = await axios.get(path + "api/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchNextPageOfStudents = async (page) => {
  try {
    const response = await axios.get(path + `api/students?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchStudent = async (id) => {
  try {
    const response = await axios.get(path + `api/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchStudentLimit = async (limit) => {
  try {
    const response = await axios.get(path + `api/students?size=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

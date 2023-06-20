import axios from "axios";

const path = "http://localhost:8080/";
const pathGraduates = "http://localhost:8080/graduates";
const pathOfficePersonal = "http://localhost:8080/office-personal";

export const fetchMessage = async () => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const postStudent = async (student) => {
  try {
    await axios.post("http://localhost:8080/students", student, {headers: { Authorization: localStorage.getItem("access_token") }});
  } catch (error) {
    console.error("Error message: ", error);
  }
};

export const getTechnologies = async () => {
  try {
    const response = await axios.get("http://localhost:8080/technologies",{
      headers: { Authorization: localStorage.getItem("access_token") },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchGraduates = async () => {
  try {
    const response = await axios.get(pathGraduates, {
      headers: { Authorization: localStorage.getItem("access_token") },
    });
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
export   const fetchStudents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/students", {
      headers: { Authorization: localStorage.getItem("access_token") },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching students: ", error);
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

//TODO

export const fetchStudent = async (id) => {
  try {
    const response = await axios.get(path + `api/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

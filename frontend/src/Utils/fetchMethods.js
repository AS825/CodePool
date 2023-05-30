import axios from "axios";

const path = "http://localhost:8090/";

export const fetchMessage = async () => {
  try {
    const response = await axios.get(path);
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
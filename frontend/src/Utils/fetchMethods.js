import axios from "axios";

const path = "http://localhost:8080/";

const getRequest = async (pathEndpoint) => {
  try {
    const response = await axios.get(path + pathEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchMessage = async () => {
  const request = await getRequest("");
  return request;
};

export const fetchStudents = async () => {
    const request = await getRequest("students");
    return request;
  };



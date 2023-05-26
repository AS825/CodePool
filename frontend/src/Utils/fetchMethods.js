import axios from "axios";

const pathGraduates = "http://localhost:8080/graduates";
const pathOfficePersonal = "http://localhost:8080/office-personal";

export const fetchGraduates = async () => {
  try {
    const response = await axios.get(pathGraduates);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

export const fetchOfficePersonal = async () => {
  try {
    const response = await axios.get(pathOfficePersonal);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

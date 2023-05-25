import axios from "axios";

const path = "http://localhost:8080/graduates";

export const fetchData = async () => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error("Error fetching message: ", error);
    throw error;
  }
};

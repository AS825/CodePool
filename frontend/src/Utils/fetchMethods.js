import axios from "axios";

const path = "http://localhost:8080/"; 

export const fetchMessage = async () => {
    try {
        const response = await axios.get(path); 
        return response.data; 
    }
    catch (error) {
        console.error("Error fetching message: ", error); 
        throw error; 
    }
};

export const postStudent = async (student) => {
    try {
        await axios.post("http://localhost:8080/students", student);
        console.log(student); 

    }
    catch (error) {
        console.error("Error message: ", error);
    }
};
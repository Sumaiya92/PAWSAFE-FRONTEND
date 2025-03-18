  import axios from "axios"
  
  const API_URL="http://192.168.29.188:5000/api";

  export const fetchAvailablePets = async () => {
      try {
        const response = await axios.get(`${API_URL}/adoption/pets`);
        return response.data;
      } catch (error) {
        console.error("Error fetching pets:", error);
        return [];
      }
    };
    
    // Adopt a Pet
    export const adoptPet = async (petId) => {
      try {
        const response = await axios.post(`${API_URL}/adoption/adopt`, { petId });
        return response.data;
      } catch (error) {
        console.error("Error adopting pet:", error);
        return { error: "Failed to adopt pet" };
      }
    };
    
    // Get Veterinary Clinics
    export const fetchVets = async () => {
      try {
        const response = await axios.get(`${API_URL}/vet/vets`);
        return response.data;
      } catch (error) {
        console.error("Error fetching vets:", error);
        return [];
      }
    };
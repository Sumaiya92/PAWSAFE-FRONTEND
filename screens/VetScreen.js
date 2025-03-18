import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchVets } from "../services/api";

const VetScreen = () => {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.29.188:5000/api/vet/vets")
  .then(response => {
    console.log("Response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Fetched data:", data);
    setVets(data);
    setLoading(false);
  })
  .catch(error => {
    console.error("Error fetching vets:", error.message);
    setLoading(false);
  });

  }, []);

  if (loading) return <ActivityIndicator size="large" color="black" />;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>
        Veterinary Clinics
      </Text>
      <FlatList
        data={vets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
            <Text>📍 {item.location}</Text>
            <Text>📞 {item.contact}</Text>
            <Text>🩺 Services: {item.services.join(", ")}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default VetScreen;

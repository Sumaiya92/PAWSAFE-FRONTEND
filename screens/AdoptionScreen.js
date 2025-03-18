import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator ,Button} from "react-native";

const AdoptionScreen = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>
  {
    try {
      fetch('http://192.168.29.188:5000/api/adoption/pets')
      .then(response => response.json())
      .then(data => setPets(data)) 
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  })

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name} ({item.breed})</Text>
            <Text style={styles.details}>{item.age} | {item.gender}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Button title="Adopt 🐶" onPress={() => console.log("Adopt button pressed")}/>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default AdoptionScreen;

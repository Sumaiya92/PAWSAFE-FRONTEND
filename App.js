import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdoptionScreen from "./screens/AdoptionScreen";
import VetScreen from "./screens/VetScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Adopt" component={AdoptionScreen} />
        <Tab.Screen name="Vet Support" component={VetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

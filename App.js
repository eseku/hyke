import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ApplicationNavigator from "./navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

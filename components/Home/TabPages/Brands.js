import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Brands = () => {
  return (
    <View style={[styles.scene, { borderWidth: 1, borderColor: "tomato" }]} />
  );
};

export default Brands;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

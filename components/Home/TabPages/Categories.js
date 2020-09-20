import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Categories = () => {
  return (
    <View style={[styles.scene, { borderWidth: 1, borderColor: "#673ab7" }]} />
  );
};

export default Categories;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

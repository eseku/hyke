import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import FlatListRenderer from "../Flatlist";

const Discover = () => {
  console.log(2);
  console.log(0.66 * Dimensions.get("window").width);
  return (
    <View style={styles.scene}>
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
        <FlatListRenderer />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

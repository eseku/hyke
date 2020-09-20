import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function () {
  return (
    <TouchableOpacity style={styles.floatButton} activeOpacity={0.5}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: "50%",
          padding: 5,
          borderColor: "#404143",
          backgroundColor: "#404143",
        }}>
        <MaterialCommunityIcons name="home-outline" size={35} color="#fff" />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          fontSize: 18,
          color: "#fff",
          fontWeight: "600",
        }}>
        Home
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatButton: {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    borderWidth: 1,
    marginLeft: -70,
    padding: 5,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#262A2D",
    backgroundColor: "#262A2D",
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});

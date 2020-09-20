import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Octicons, AntDesign } from "@expo/vector-icons";

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.shoesText}>Shoes</Text>
      </View>
      <View style={styles.iconsView}>
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  shoesText: {
    fontSize: 28,
    fontWeight: "700",
  },
  iconsView: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0.1,
    justifyContent: "space-between",
  },
});

import React from "react";
import {
  Text,
  View,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { FloatingButton, Header, TabView } from "../components/Home";

function Home() {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header />
        <TabView />
      </SafeAreaView>
      <FloatingButton />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000",
    paddingVertical: 50,
    position: "relative",
    backgroundColor: "#fff",
  },
  safeAreaContainer: {
    flex: 1,
    // borderColor: "green",
    // borderWidth: 1,
  },
});

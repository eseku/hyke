import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Popular, Categories, Brands } from "./TabPages";

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
  <TabBar
    bounces={true}
    activeColor="#4A5568"
    inactiveColor="#A0AEC0"
    tabStyle={{
      paddingLeft: 15,
      margin: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
    }}
    indicatorContainerStyle={{
      marginLeft: 15,
      // borderWidth: 1,
    }}
    contentContainerStyle={{
      borderWidth: 0,
    }}
    {...props}
    indicatorStyle={{
      backgroundColor: "#4A5568",
      width: 20,
      height: 3,
      borderWidth: 0,
    }}
    labelStyle={{
      borderWidth: 0,
    }}
    style={{
      backgroundColor: "#fff",
      height: 50,
      borderWidth: 0,
    }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color,
          fontWeight: focused ? "600" : "500",
          fontSize: 22,
        }}>
        {route.title}
      </Text>
    )}
  />
);

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Popular" },
    { key: "second", title: "Categories" },
    { key: "third", title: "Brands" },
  ]);

  const renderScene = SceneMap({
    first: Popular,
    second: Categories,
    third: Brands,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

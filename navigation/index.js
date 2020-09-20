import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

const { Navigator, Screen } = createStackNavigator();

function ApplicationNavigator() {
  return (
    <Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export default ApplicationNavigator;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import Detail from "./pages/Detail";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Markets" component={Markets} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

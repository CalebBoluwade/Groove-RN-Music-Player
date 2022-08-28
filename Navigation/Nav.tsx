import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MusicPlayer from "../Screens/MusicPlayer";
import ExplorerScreen from "../Screens/ExplorerScreen";
import PlayerModal from "../Screens/PlayerModal";
import SearchScreen from "../Screens/SearchScreen";

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={MusicPlayer} />
          <Stack.Screen name="Explorer" component={ExplorerScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="PlayerModal" component={PlayerModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;

// const styles = StyleSheet.create({})

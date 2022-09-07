import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import MusicPlayer from "../Screens/MusicPlayer";
import ExplorerScreen from "../Screens/ExplorerScreen";
import PlayerModal from "../Screens/PlayerModal";
import SearchScreen from "../Screens/SearchScreen";
import ArtistPage from "../Screens/ArtistPage";
import SongDetailPage from "../Screens/SongDetailPage";
import Options from "../Components/Options";

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={MusicPlayer} />
          <Stack.Screen name="Explorer" component={ExplorerScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Details" component={SongDetailPage} />
          <Stack.Screen name="Artist" component={ArtistPage} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            animationTypeForReplace: "pop",
          }}
        >
          <Stack.Screen
            name="PlayerModal"
            component={PlayerModal}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="SongOptions"
            component={Options}
            options={{
              presentation: "transparentModal",
              cardStyle: {
                elevation: 3,
                // shadowColor: "transparent",
                backgroundColor:
                  Platform.OS === "ios" ? "transparent" : "rgba(0, 0, 0, 0)",
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;

// const styles = StyleSheet.create({})

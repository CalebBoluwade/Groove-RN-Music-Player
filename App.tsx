import { StyleSheet, StatusBar, View } from "react-native";
import Nav from "./Navigation/Nav";
import AppContextProvider from "./Context/AppContextProvider";
import React from "react";
// import TrackPlayer from "react-native-track-player";
// import { PlaybackService } from "./Service";

const App = () => {
  // const Context = useContext(DetailsContext)

  return (
    <AppContextProvider style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Nav />
    </AppContextProvider>
  );
};
// AppRegistry.registerComponent(...);
// TrackPlayer.registerPlaybackService(() => PlaybackService);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

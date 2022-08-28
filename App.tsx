import { StyleSheet, StatusBar, View } from "react-native";
import Nav from "./Navigation/Nav";
// import "expo-dev-client";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Nav />
    </View>
  );
};
// AppRegistry.registerComponent(AppName,() => App);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

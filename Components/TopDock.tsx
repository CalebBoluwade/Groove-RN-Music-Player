import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

let { width } = Dimensions.get("window");

const dark = false;

const TopDock = ({ navigation }: any) => {
  return (
    <View>
      <Animated.View style={styles.explorer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Home")}
          style={styles.explorerT}
        >
          <Text style={{ color: "#fff" }}>Home</Text>
          <Ionicons name="ios-home-outline" size={20} color="#777777" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Explorer")}
          style={styles.explorerT}
        >
          <Text style={{ color: "#fff", marginBottom: 2 }}>Explore</Text>
          <FontAwesome name="wpexplorer" size={20} color="#777777" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Search")}
          style={styles.explorerT}
        >
          <Text style={{ color: "#fff" }}>Search</Text>
          <Ionicons name="ios-search-outline" size={20} color="#777777" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Profile")}
          style={styles.Profile}
        >
          <Text style={{ color: "#fff" }}>C</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default TopDock;

const styles = StyleSheet.create({
  explorer: {
    // position: "absolute",
    // top: Platform.OS === "ios" ? 400 : 455,
    // zIndex: 3,
    width: width / 1.1,
    height: 70,
    padding: 15,
    backgroundColor: dark ? "#393E46" : "#000",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    shadowColor: dark ? "#ccc" : "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  explorerT: {
    width: "25%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#3d5c3a",
    alignItems: "center",
    justifyContent: "center",
  },
});

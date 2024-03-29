import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Appearance,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

let colorScheme = Appearance.getColorScheme();

const SongOptions = () => {
  return (
    <View style={styles.songOptionsModal}>
      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        <Ionicons
          name="close"
          size={20}
          color={colorScheme === "dark" ? "#CCC" : "#000"}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.songOptions}>
          <MaterialCommunityIcons
            name="page-next-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Play Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <MaterialCommunityIcons
            name="playlist-music-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Add to Queue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <MaterialCommunityIcons
            name="account-music-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>View Artist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <Ionicons
            name="albums-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Go to Album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <Ionicons
            name="heart-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <FontAwesome
            name="slideshare"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SongOptions;

const styles = StyleSheet.create({
  songOptionsModal: {
    backgroundColor: colorScheme === "dark" ? "#000" : "#FFF",
    borderTopColor: "#393E46",
    zIndex: 3,
    height: 400,
    padding: 15,
    borderRadius: 7,
    elevation: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  songOptions: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  songOptionsText: {
    color: colorScheme === "dark" ? "#FFF" : "#000",
    marginLeft: 15,
  },
});

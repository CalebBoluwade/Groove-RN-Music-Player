import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Appearance,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

let colorScheme = Appearance.getColorScheme();

const SongOptions = ({ route, navigation }: any) => {
  const { item } = route.params;
  // console.log(item);

  return (
    <View style={styles.songOptionsModal}>
      <TouchableOpacity
        style={{ alignSelf: "flex-end" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons
          name="close"
          size={18}
          color={colorScheme === "dark" ? "#CCC" : "#000"}
        />
      </TouchableOpacity>
      <View style={styles.songMiniView}>
        <Text style={styles.songOptionsText}>{item.title}</Text>
        <Text style={styles.songOptionsText}>{item.artist}</Text>
      </View>
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
            name="playlist-plus"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Add to Playlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.songOptions}
          onPress={() => navigation.navigate("Artist")}
        >
          <MaterialCommunityIcons
            name="account-music-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>View Artist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.songOptions}
          onPress={() => navigation.navigate("Artist")}
        >
          <Ionicons
            name="albums-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Go to Album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.songOptions}>
          <Ionicons
            name="cloud-download-outline"
            size={25}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
          <Text style={styles.songOptionsText}>Download</Text>
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
      {/* </Modal> */}
    </View>
  );
};

export default SongOptions;

const styles = StyleSheet.create({
  songOptionsModal: {
    backgroundColor: colorScheme === "dark" ? "#000" : "#FFF",
    // borderTopRadius: "#393E46",
    // flex: 1,
    zIndex: 3,
    height: 425,
    padding: 15,
    borderTopRadius: 15,
    elevation: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  songMiniView: {
    borderBottomColor: "#777",
    borderWidth: 1,
    paddingLeft: 10,
    paddingBottom: 7,
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

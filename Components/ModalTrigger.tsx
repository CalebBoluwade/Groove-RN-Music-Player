import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import songsData from "../Models/data";

const ModalTrigger = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState<any>("0");
  const songSlider = useRef(null);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("PlayerModal")}
      style={styles.playerModal}
    >
      <View>
        <Text style={styles.songTitleModal}>{songsData[songIndex].title}</Text>
        <Text style={styles.artistNameModal}>
          {songsData[songIndex].artist}
        </Text>
      </View>

      <View>
        <TouchableOpacity
        // onPress={() => togglePlayback(playbackState)}
        >
          <Ionicons
            name={
              "ios-pause"
              // playbackState == State.Playing ? "ios-pause" : "ios-play-circle"
            }
            size={25}
            color="#777777"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ModalTrigger;

const styles = StyleSheet.create({
  playerModal: {
    // borderTopColor: "#393E46",
    backgroundColor: "#000",
    justifyContent: "space-between",
    padding: 25,
    flexDirection: "row",
  },

  songTitleModal: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    color: "#fff",
    marginBottom: 10,
  },

  artistNameModal: {
    textAlign: "left",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "300",
    color: "#fff",
    marginBottom: 10,
  },
});

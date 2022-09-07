import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Appearance,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import songsData from "../Models/data";

let colorScheme = Appearance.getColorScheme();

const ModalTrigger = ({ navigation }: any) => {
  // const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState<any>("0");
  // const songSlider = useRef(null);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("PlayerModal")}
      style={styles.playerModal}
    >
      <View style={styles.modalView}>
        <View>
          <Text style={styles.songTitleModal}>
            {songsData[songIndex].title}
          </Text>
          <Text style={styles.artistNameModal}>
            {songsData[songIndex].artist}
          </Text>
        </View>

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
      {/* 
      <Slider
        style={styles.progress}
        value={23}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#777777"
        maximumTrackTintColor="#fff"
        onSlidingComplete={() => {}}
      /> */}
    </TouchableOpacity>
  );
};

export default ModalTrigger;

const styles = StyleSheet.create({
  playerModal: {
    backgroundColor: colorScheme === "dark" ? "#393E46" : "#ccc",
    borderWidth: 1,
    // borderTopColor: colorScheme === "dark" ? "#ccc" : "#393E46",
    borderColor: colorScheme === "dark" ? "#000" : "#393E46",
  },
  modalView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  progress: {
    position: "relative",
    bottom: 18,
  },
  songTitleModal: {
    fontSize: 21,
    fontWeight: "600",
    textAlign: "left",
    color: "#fff",
    marginBottom: 3,
  },

  artistNameModal: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 2,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 10,
  },
});

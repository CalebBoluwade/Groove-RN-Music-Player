import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
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
    backgroundColor: "#000",
    borderTopColor: "#393E46",
  },
  modalView: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  progress: {
    position: "relative",
    bottom: 18,
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

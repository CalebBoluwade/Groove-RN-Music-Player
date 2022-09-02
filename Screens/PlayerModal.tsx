import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Appearance,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import songsData from "../Models/data";

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";

let { width } = Dimensions.get("window");
const colorScheme = Appearance.getColorScheme();

const shareActionSheet = () => {
  console.log("f");
};

const PlayerModal = ({ navigation }: any) => {
  // const playbackState = usePlaybackState();
  // const progress = useProgress();

  const setupPlayer = async () => {
    // await TrackPlayer.setupPlayer();
    // await TrackPlayer.add(songsData);
  };

  const togglePlayback = async (playbackState: any) => {
    // const currentTrack = await TrackPlayer.getCurrentTrack();
    // if (currentTrack !== null) {
    //   if (playbackState == State.Paused) {
    //     // await TrackPlayer.play();
    //   } else {
    //     // await TrackPlayer.pause();
    //   }
    // }
  };
  const [repeatModeIcon, setRepeatMode] = useState("off");

  const triggerRepeatMode = async () => {
    if (repeatModeIcon == "off") {
      return "repeat-off";
    }
    if (repeatModeIcon == "track") {
      return "repeat-once";
    }
    if (repeatModeIcon == "repeat") {
      return "repeat";
    }
  };

  const repeatMode = async () => {
    if (repeatModeIcon == "off") {
      // await TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode("track");
    }
    if (repeatModeIcon == "track") {
      // await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode("repeat");
    }
    if (repeatModeIcon == "repeat") {
      // await TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode("off");
    }
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState<any>("0");
  const songSlider = useRef(null);

  const skipTo = async (trackId: number) => {
    // await TrackPlayer.skip(trackId);
  };

  useEffect(() => {
    // setupPlayer();
    scrollX.addListener(({ value }) => {
      // console.log(value)
      const index = Math.round(value / width);
      skipTo(index);
      setSongIndex(index);
    });

    return () => {
      // scrollX.removeAllListeners();
    };
  }, []);

  const moveForward = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const moveBackward = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongs = ({ index, item }: any) => {
    return (
      <Animated.View
        style={{
          width: width,
          // height: 600,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.artworkContainer}>
          <Image style={styles.imgContainer} source={item.artwork} />
        </View>

        <View>
          <Text style={styles.songTitle}>{songsData[songIndex].title}</Text>
          <Text style={styles.artistName}>{songsData[songIndex].artist}</Text>
        </View>

        <View style={{ paddingHorizontal: 5, width: width }}>
          <Slider
            style={styles.progressContainer}
            // value={progress.position}
            minimumValue={0}
            maximumValue={100}
            // maximumValue={Progress.duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={async (value) => {
              // await TrackPlayer.seekTo(value)
            }}
          />
          <View style={styles.progressLabel}>
            <Text style={styles.progressLabelBegin}>
              {/* {new Date(progress.position * 10000).toISOString().substring(14, 5)} */}
              0.00
            </Text>
            <Text style={styles.progressLabelEnd}>
              {/* {new Date((progress.duration - progress.position) * 10000).toISOString().substring(14, 5)} */}
            </Text>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <ImageBackground
      source={songsData[songIndex].artwork}
      style={styles.container}
    >
      <View style={styles.mainContainer}>
        <View style={{ width: width }}>
          <Animated.FlatList
            ref={songSlider}
            data={songsData}
            renderItem={renderSongs}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={6}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x: scrollX },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          />
        </View>

        <View style={styles.musicControls}>
          <TouchableOpacity>
            <Ionicons
              name="repeat"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#777777"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveBackward}>
            <Ionicons
              name="play-skip-back-outline"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#777777"}
              // style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => togglePlayback(playbackState)}
          >
            <Ionicons
              name={
                "ios-play-circle"
                // playbackState == State.Playing ? "ios-pause" : "ios-play-circle"
              }
              size={65}
              color={colorScheme === "dark" ? "#fff" : "#777777"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveForward}>
            <Ionicons
              name="play-skip-forward-outline"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#777777"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="shuffle"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#777777"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomButtons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={repeatMode}>
            <Ionicons
              name={`${triggerRepeatMode()}`}
              size={30}
              color={repeatModeIcon === "off" ? "#777777" : "#FFFFFF"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareActionSheet}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PlayerModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,56,121,0.4)",
    // backgroundColor: "#393E46",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.8)",
    justifyContent: "center",
    alignSelf: "center",
  },
  artworkContainer: {
    width: Platform.OS === "android" ? 385 : 355,
    height: Platform.OS === "android" ? 385 : 355,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
  },
  artistName: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "300",
    color: "#fff",
  },
  progressContainer: {
    flexDirection: "row",
    marginTop: 15,
    height: 40,
    width: "93%",
    justifyContent: "center",
    alignSelf: "center",
  },
  progressLabel: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  progressLabelBegin: {
    color: "#fff",
  },
  progressLabelEnd: {
    color: "#fff",
  },
  musicControls: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    // borderTopRightRadius: 15,
    // borderTopLeftRadius: 15,
    // borderRadius: 5,
    backgroundColor: "#000",
    borderTopColor: "#393E46",
    borderWidth: 3,
    width: width,
    alignItems: "center",
    paddingVertical: 10,
    paddingBottom: 25,
  },
  bottomButtons: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

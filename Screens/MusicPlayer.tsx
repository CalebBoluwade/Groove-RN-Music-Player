import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Animated,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Slider from "@react-native-community/slider";
import songsData from "../Models/data";

const dark = false;

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import TopDock from "../Components/TopDock";
import ModalTrigger from "../Components/ModalTrigger";
import { DefaultTheme } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

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

const MusicPlayer = ({ navigation }: any) => {
  // const playbackState = usePlaybackState();

  // let artwork;
  // return songsData.forEach((img) => {
  //   artwork = img.artwork;
  // });

  const DetailsPage = (item: object) => {
    console.log(item);
  };

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity onPress={() => DetailsPage(item)}>
          <Image style={styles.artworkContainer} source={item.artwork} />
        </TouchableOpacity>

        <View style={{ width: 170, marginVertical: 2, padding: 5 }}>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.artist}</Text>
        </View>
      </View>
    );
  };

  const renderItem2 = ({ item }: any) => {
    return (
      <View style={styles.playlistContainer}>
        <View style={styles.playlistContainer}>
          <Image style={styles.playlistItem} source={item.artwork} />

          <View style={{ width: "80%" }}>
            <Text style={{ color: "#000" }}>{item.title}</Text>
            <Text style={{ color: "#000" }}>{item.artist}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={10} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <TopDock navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.BoxText}>Listen Here</Text>
            <View>
              <FlatList
                data={songsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.Boxes}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={18}
              ></FlatList>
            </View>

            <View>
              <Text style={styles.BoxText}>Quick Picks</Text>
              <ScrollView horizontal>
                <FlatList
                  data={songsData}
                  renderItem={renderItem2}
                  keyExtractor={(item) => item.id}
                  // style={styles.playlistContainer}
                  // numColumns={4}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={12}
                ></FlatList>
              </ScrollView>
            </View>

            <View>
              <Text style={styles.BoxText}>Albums & Eps</Text>
              <FlatList
                data={songsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.Boxes}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={18}
              ></FlatList>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <ModalTrigger navigation={navigation} />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // marginTop: Platform.OS === "android" ? 5 : 0,
  },

  mainContainer: {
    flex: 1,
    padding: 25,
    alignSelf: "center",
    backgroundColor: dark ? "#000" : "#607EAA",
  },

  BoxText: {
    color: dark ? "#000" : "#000",
    fontSize: 24,
    paddingLeft: 15,
    paddingTop: 10,
  },
  Boxes: {
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    // elevation: 15,
  },
  artwork: {
    // paddingHorizontal: 5,
    marginVertical: 7,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  artworkContainer: {
    width: width / 2.85,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 7,
    padding: 25,
    marginVertical: 7,
    shadowColor: dark ? "#ccc" : "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playlistContainer: {
    // width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    marginVertical: 3,
  },
  playlistItem: {
    width: 40,
    height: 40,
  },
  playerModal: {
    // borderTopColor: "#393E46",
    backgroundColor: "#000",
    justifyContent: "space-between",
    padding: 32,
    flexDirection: "row",
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: dark ? "#fff" : "#000",
  },
  songTitleModal: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    color: "#fff",
  },
  artistName: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "300",
    color: dark ? "#fff" : "#000",
  },
  artistNameModal: {
    textAlign: "left",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "300",
    color: "#fff",
  },
  progressContainer: {
    flexDirection: "row",
    marginTop: 15,
    height: 40,
    width: "85%",
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
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 15,
    alignContent: "center",
  },
});

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
  ActionSheetIOS,
  Appearance,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
// import Slider from "@react-native-community/slider";
import songsData from "../Models/data";
import SongOptions from "../Components/SongOptions";

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
import { DetailsContext } from "../Context/AppContextProvider";

let { width, height } = Dimensions.get("window");
let colorScheme = Appearance.getColorScheme();

const MusicPlayer = ({ navigation }: any) => {
  const { detailsData, setDetailsData }: any = useContext(DetailsContext);
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

  const SongOptions = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Generate number", "Reset"],
          // destructiveButtonIndex: 2,

          cancelButtonIndex: 0,
          // userInterfaceStyle: "dark",
        },
        (buttonIndex) => {}
      );
    }
  };

  const DetailsPage = (item: object) => {
    setDetailsData(item);
    // console.log(detailsData);
    navigation.navigate("Details");
  };

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity onPress={() => DetailsPage(item)}>
          <Image style={styles.artworkContainer} source={item.artwork} />
        </TouchableOpacity>

        <View style={{ width: 170, marginVertical: 2, padding: 5 }}>
          <Text style={{ color: dark ? "#fff" : "#000" }}>{item.title}</Text>
          <Text style={{ color: dark ? "#fff" : "#000" }}>{item.artist}</Text>
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
            <Text style={{ color: colorScheme === "dark" ? "#000" : "#fff" }}>
              {item.title}
            </Text>
            <Text style={{ color: colorScheme === "dark" ? "#000" : "#fff" }}>
              {item.artist}
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => SongOptions()}>
            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color={colorScheme === "dark" ? "#777" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
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
                // onLongPress={() => navigation.navigate("SongOptions")}
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

      {/* <SongOptions /> */}
      <ModalTrigger navigation={navigation} />

      <View style={styles.songOptionsModal}>
        <View>
          <TouchableOpacity>
            <Text>Play Next</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Play Next</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Play Next</Text>
          </TouchableOpacity>
        </View>
      </View>
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

  songOptionsModal: {
    backgroundColor: "#000",
    borderTopColor: "#393E46",
    height: 300,
    padding: 15,
  },

  mainContainer: {
    flex: 1,
    padding: 25,
    alignSelf: "center",
    backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
  },

  BoxText: {
    color: colorScheme === "dark" ? "#fff" : "#000",
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
    elevation: 15,
  },
  artwork: {
    // paddingHorizontal: 5,
    marginVertical: 7,
    // marginLeft: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  artworkContainer: {
    width: width / 2.75,
    height: Platform.OS === "ios" ? 160 : 185,
    borderRadius: 10,
    marginHorizontal: 7,
    padding: 25,
    marginVertical: 7,
    shadowColor: colorScheme === "dark" ? "#fff" : "#000",
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

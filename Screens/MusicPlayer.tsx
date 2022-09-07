import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  SectionList,
  Animated,
  ActionSheetIOS,
  Appearance,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import songsData from "../Models/data";
import artistData from "../Models/ArtistData";
import SongOptions from "../Components/SongOptions";
import Options from "../Components/Options";

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
// import { DetailsContext } from "../Context/AppContextProvider";
import { FunctContext } from "../Context/FunctionsProvider";
import { DetailsContext } from "../Context/AppContextProvider";
import ArtistCircle from "../Components/ArtistCircle";

let { width, height } = Dimensions.get("window");
let colorScheme = Appearance.getColorScheme();

const MusicPlayer = ({ navigation }: any) => {
  const { setOptionsData, setDetailsData }: any = useContext(DetailsContext);
  // const playbackState = usePlaybackState();
  // const progress = useProgress();

  // console.log(SongOptionsBtn, DetailsPage);

  const SongOptionsBtn = (item: object) => {
    setOptionsData(item);
    // console.log(detailsData);
    navigation.navigate("Details");
  };

  const DetailsPage = (item: object) => {
    setDetailsData(item);
    // console.log(detailsData);
    navigation.navigate("Details");
  };

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

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { item: item })}
          onLongPress={() => navigation.navigate("SongOptions", { item: item })}
        >
          <Image style={styles.artworkContainer} source={item.artwork} />
        </TouchableOpacity>

        <View style={{ width: 170, marginVertical: 2, padding: 5 }}>
          <Text style={{ color: colorScheme ? "#fff" : "#000" }}>
            {item.title}
          </Text>
          <Text style={{ color: colorScheme ? "#fff" : "#000" }}>
            {item.artist}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem2 = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.playlistContainer}>
        <View style={styles.playlistContainer}>
          <Image style={styles.playlistItem} source={item.artwork} />

          <View style={{ width: "80%" }}>
            <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
              {item.title}
            </Text>
            <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
              {item.artist}
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SongOptions")}>
            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color={colorScheme === "dark" ? "#777" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
          <View style={{}}>
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

            <ArtistCircle
              header="Quick Picks"
              Data={artistData}
              navigation={navigation}
            />

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

          <View>
            <Text style={styles.BoxText}>Quick Picks</Text>
            <ScrollView horizontal>
              <FlatList
                data={songsData}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                // renderSectionHeader={
                // style={styles.playlistContainer}
                // initialNumToRender={4}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={12}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* <Options navigation={navigation} /> */}
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
    // padding: 5,
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
    padding: 30,
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
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
  artistName: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "300",
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
});

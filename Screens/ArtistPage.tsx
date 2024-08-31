import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Appearance,
  ScrollView,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import songsData from "../Models/data";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

let colorScheme = Appearance.getColorScheme();

const ArtistPage = ({ route }: any) => {
  const { item } = route.params;

  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan().onUpdate((event) => {
    console.log(event.translationY);
  });

  const bottomSheet = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  // console.log(item);
  const renderSongss = ({ item }: any) => {
    // console.log(item);
    return (
      <View>
        <TouchableOpacity>
          <Image source={item.artwork} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderAlbums = ({ item }: any) => {
    // console.log(item);
    return (
      <View>
        <TouchableOpacity>
          <Image source={item.artwork} style={{ width: 400, height: 250 }} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      // showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#000" : "",
      }}
    >
      <View>
        <ImageBackground source={item.artistImg} style={styles.artistImg}>
          <View style={styles.artistPlayDisplay}>
            <Text style={styles.artistPlayText}>{item.artistName}</Text>
            <Ionicons
              name="play-circle"
              size={85}
              color={colorScheme === "dark" ? "#000" : "#FFF"}
            />
          </View>
        </ImageBackground>

        <View style={{ padding: 15 }}>
          <View style={styles.lastestRelease}>
            <View>
              <Text style={styles.releaseText}>LATEST RELEASE</Text>
              <Text style={styles.releaseName}>Bad Since '97</Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.releaseText}>{"Single"}</Text>
                <Text style={styles.releaseText}>{"2022"}</Text>
              </View>
            </View>
            {/* 7983460513 */}
            <Image
              source={require("../Models/Data/Artwork/Ruger-The-Second-Wave-Deluxe-EP.jpg")}
              style={styles.releaseImg}
            />
          </View>

          <GestureDetector gesture={gesture}>
            <Animated.View style={[bottomSheet]}>
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  fontSize: 30,
                }}
              >
                Top Songs
              </Text>
              <Text>More</Text>

              <View>
                <FlatList
                  data={songsData}
                  renderItem={renderSongss}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={18}
                  // onLongPress={() => navigation.navigate("SongOptions")}
                />
              </View>
            </Animated.View>
          </GestureDetector>

          <View style={{ marginTop: 5 }}>
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 30,
              }}
            >
              Albums
            </Text>

            <View>
              <FlatList
                data={songsData}
                renderItem={renderAlbums}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={18}
                // onLongPress={() => navigation.navigate("SongOptions")}
              ></FlatList>
            </View>

            {/* <FlatList
              data={songsData}
              renderItem={renderAlbums}
              keyExtractor={(album) => album.id}
              horizontal
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ArtistPage;

const styles = StyleSheet.create({
  artistImg: {
    height: 500,
  },
  artistPlayDisplay: {
    width: "100%",
    flexDirection: "row",
    padding: 25,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: -10,
  },
  artistPlayText: {
    color: colorScheme === "dark" ? "#000" : "#fff",
    fontSize: 32,
    fontWeight: "900",
  },
  lastestRelease: {
    width: "94%",
    height: 110,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor:
      colorScheme === "dark"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.8)",
  },
  releaseText: {
    color: colorScheme === "dark" ? "#777" : "#000",
  },
  releaseName: {
    color: colorScheme === "dark" ? "#fff" : "#000",
    fontSize: 21,
    marginVertical: 3,
  },
  releaseImg: {
    width: 70,
    height: 70,
  },
});

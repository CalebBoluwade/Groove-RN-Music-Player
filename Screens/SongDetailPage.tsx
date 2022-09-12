import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  FlatList,
  Appearance,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ModalTrigger from "../Components/ModalTrigger";
import songsData from "../Models/data";
import { DetailsContext } from "../Context/AppContextProvider";

// const dark = true;
const { width } = Dimensions.get("window");
const colorScheme = Appearance.getColorScheme();

const SongDetailPage = ({ route, navigation }: any) => {
  const { detailsData }: any = useContext(DetailsContext);
  const { item } = route.params;
  // console.log(detailsData);

  const renderItem2 = () => {
    return (
      <TouchableOpacity style={styles.playlist}>
        <View style={styles.playlistContainer}>
          <Text
            style={{
              width: 30,
              justifyContent: "center",
              textAlign: "left",
              color: colorScheme === "dark" ? "#fff" : "#000",
            }}
          >
            {item.id}
          </Text>
          {/* <Image style={styles.playlistItem} source={item.artwork} /> */}

          <View>
            <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
              {item.title}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="explicit"
                size={21}
                style={{ marginRight: 5 }}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
              <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
                {item.artist}
              </Text>
            </View>
          </View>
        </View>

        <Text>
          {
            /* {new Date((progress.duration - progress.position) * 10000).toISOString().substring(14, 5)} */ "-: --"
          }
        </Text>

        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("SongOptions", { item: item })}
        >
          <Ionicons name="ellipsis-vertical" size={21} color="#777777" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  let items = [item];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Search")}
          >
            <Ionicons
              name="ios-search-outline"
              size={30}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.artistInfo}>
          <Image style={styles.artwork} source={item.artwork} />

          <View style={{ width: 200, height: 150 }}>
            <Text style={styles.songInfoTitle}>{item.title}</Text>
            <Text style={styles.songInfoName}>{item.artist}</Text>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name="explicit"
                size={25}
                style={{ marginRight: 5 }}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />

              <Text style={styles.songInfoName}>
                {item.album ? "Album" : "Single"} . {2022}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.detailsButton}>
            <Ionicons
              name="play-circle-outline"
              size={35}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
              PLAY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsButton}>
            <Ionicons
              name="ios-shuffle-outline"
              size={35}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}>
              Shuffle
            </Text>
          </TouchableOpacity>
        </View>

        {/* <ScrollView horizontal> */}
        <FlatList
          data={items}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={12}
        ></FlatList>
        {/* </ScrollView> */}
      </View>

      <ModalTrigger navigation={navigation} />
    </View>
  );
};

export default SongDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContainer: {
    flex: 1,
    width: width,
    padding: 25,
    paddingTop: Platform.OS === "ios" ? 45 : 15,
    alignSelf: "center",
    backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
  },
  artistInfo: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  songInfoTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
  songInfoName: {
    fontSize: 16,
    fontWeight: "300",
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
  artwork: {
    width: Platform.OS === "android" ? 225 : 185,
    height: Platform.OS === "android" ? 220 : 185,
    borderRadius: 7,
    marginRight: 10,
  },
  detailsButton: {
    width: "49%",
    color: colorScheme === "dark" ? "#fff" : "#000",
    padding: 5,
    borderWidth: 2,
    borderColor: colorScheme === "dark" ? "#ccc" : "#000",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  playlist: {
    // width: width ,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "#ccc",
  },
  playlistContainer: {
    // width: width / 1.1,
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 7,
    marginVertical: 10,
  },
  playlistItem: {
    width: 40,
    height: 40,
  },
});

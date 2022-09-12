import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  SafeAreaView,
  Appearance,
  FlatList,
} from "react-native";
import React, { useState, useRef, useLayoutEffect } from "react";
import ModalTrigger from "../Components/ModalTrigger";
import songsData from "../Models/data";
import artistData from "../Models/ArtistData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableHighlight } from "react-native";

// const colorScheme = Appearance.getColorScheme();
// const dark = false;
const { width } = Dimensions.get("window");
let colorScheme = Appearance.getColorScheme() === "dark";

const SearchScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const [foundSong, setFoundSong] = useState<string>("");
  const [foundArtist, setFoundArtist] = useState<string>("");

  const focusRef = useRef<TextInput | any>(null).current;

  // useLayoutEffect(() => {
  //   // focusRef.focus();
  // }, []);

  // const mergedData = [songsData, ...artistData];

  const OnSearch = async (text: string) => {
    console.log("dk", text);
    setSearch(text);
  };

  // const findBySongTitle = () => {
  //   songsData.filter((findMusic) => {
  //     const song = findMusic;
  //     // .includes(search);
  //     // setFoundSong(song);
  //     console.log(song, findMusic);

  //     return findMusic;
  //   });
  // };

  // const findByArtist = () => {
  //   artistData.filter((findArtist) => {
  //     findArtist.artistName.toLowerCase().includes(search);
  //   });
  // };

  // findBySongTitle();

  const renderSearch = (item: object) => {
    // findByArtist();
    const findBySongTitle = (item: any) => {
      item?.title.filter((findSongbyTitle: string) => {
        if (findSongbyTitle.includes(search)) {
          console.log("Yes");
        }
        // .includes(search);
        // setFoundSong(song);
        // console.log(song, findMusic);

        // return findMusic;
      });
    };

    findBySongTitle(item);

    return (
      <TouchableHighlight>
        <View>
          <MaterialIcons
            name="explicit"
            size={25}
            style={{ marginRight: 5 }}
            color={colorScheme ? "#fff" : "#000"}
          />
          <Text>{}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <TextInput
          style={styles.searchInput}
          // ref={focusRef}
          placeholder="Search Your Library (Songs, Artists, Lyrics)"
          onChangeText={(text) => OnSearch(text)}
        />

        <View>
          <FlatList
            data={songsData}
            renderItem={renderSearch}
            keyExtractor={(key) => key.id}
          />
        </View>
      </SafeAreaView>

      <ModalTrigger navigation={navigation} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: 15,
    // marginTop: Platform.OS === "android" ? 5 : 0,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingVertical: 25,
    alignItems: "center",
    backgroundColor: colorScheme ? "#000" : "#94B49F",
  },
  searchInput: {
    width: width / 1.1,
    height: 50,
    backgroundColor: "#fff",
    color: "#94B49F",
    borderRadius: 7,
    paddingHorizontal: 15,
  },
});

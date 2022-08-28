import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import ModalTrigger from "../Components/ModalTrigger";

const dark = false;
const { width } = Dimensions.get("window");

const SearchScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState<String>("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Your Library"
          onChangeText={(text) => setSearch(text)}
        />

        <Text>SearchScreen</Text>
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
    backgroundColor: dark ? "#000" : "#94B49F",
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

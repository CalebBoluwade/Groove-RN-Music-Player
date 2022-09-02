import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SongOptions = ({ navigation }: any) => {
  return (
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
  );
};

export default SongOptions;

const styles = StyleSheet.create({
  songOptionsModal: {
    backgroundColor: "#000",
    borderTopColor: "#393E46",
    height: 300,
    padding: 15,
  },
});

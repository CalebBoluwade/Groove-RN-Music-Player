import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

interface props {
  header: string;
  Data: Array<object>;
}

const ArtistCircle = ({ Data, header, navigation }: any) => {
  // console.log(navigation.navigate);
  const renderArtistCircle = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.Artist}
        onPress={() => navigation.navigate("Artist")}
      >
        <Image
          source={item.artistImg}
          style={styles.ArtistCircle}
          resizeMode="contain"
        />
        <Text style={{ color: "#fff", marginVertical: 5 }}>
          {item.artistName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        data={Data}
        horizontal
        renderItem={renderArtistCircle}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ArtistCircle;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
  },
  header: {
    color: "#FFF",
    fontSize: 26,
    marginVertical: 10,
    paddingLeft: 7,
  },
  Artist: {
    alignItems: "center",
  },
  ArtistCircle: {
    borderRadius: 150,
    width: 200,
    height: 200,
    marginHorizontal: 15,
  },
});

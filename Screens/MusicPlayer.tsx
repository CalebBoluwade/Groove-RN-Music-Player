import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from '@react-native-community/slider';

let { width } = Dimensions.get('window')

const MusicPlayer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.artworkContainer}>
                    <Image style={styles.imgContainer} source={require("../assets/girlHeadphones.jpg")} />
                </View>

                <View>
                    <Text style={styles.songTitle}>Wait on Me (ft. Kanye West)</Text>
                    <Text style={styles.artistName}>GROOVY</Text>
                </View>

                <View>
                    <Slider
                        style={styles.progressContainer}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor='FFD369'
                        minimumTrackTintColor="FFD369"
                        maximumTrackTintColor='#fff'
                        onSlidingComplete={() => { }}
                    />
                    <View style={styles.progressLabel}>
                        <Text style={styles.progressLabelBegin}>0:00</Text>
                        <Text style={styles.progressLabelEnd}>3.55</Text>
                    </View>
                </View>

                <View style={styles.musicControls}>
                    <TouchableOpacity>
                        <Ionicons name='play-skip-back-outline' size={30} color="#777777" style={{ marginTop: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ios-pause-circle' size={75} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='play-skip-forward-outline' size={30} color="#777777" style={{ marginTop: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomButtons}>
                    <TouchableOpacity>
                        <Ionicons name='heart-outline' size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='repeat' size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='share-outline' size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ellipsis-horizontal' size={30} color="#777777" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#222831"
        backgroundColor: "#000"
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    artworkContainer: {
        width: 320,
        height: 320,
        marginBottom: 25,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5
    },
    imgContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 7
    },
    songTitle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: "#fff"
    },
    artistName: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "200",
        color: "#fff"
    },
    progressContainer: {
        flexDirection: 'row',
        marginTop: 15,
        height: 40,
        // width: 350
    },
    progressLabel: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    progressLabelBegin: {
        color: "#fff"
    },
    progressLabelEnd: {
        color: "#fff"
    },
    musicControls: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 15,
        alignContent: "center"
    },
    bottomContainer: {
        borderTopColor: "393E46",
        borderTopWidth: 1,
        width: width,
        alignItems: "center",
        padding: 15

    },
    bottomButtons: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    }
})
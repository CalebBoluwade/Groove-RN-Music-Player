import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from '@react-native-community/slider';
import songsData from "../Models/data"

let { width } = Dimensions.get('window');

const MusicPlayer = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState<any>("0");
    const songSlider = useRef(null);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            // console.log(value)
            const index = `${Math.round(value / width)}`
            setSongIndex(index)
        })

        return () => {
            scrollX.removeAllListeners()
        }
    }, [])

    const moveForward = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex + 1) * width
        })
    }

    const moveBackward = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex - 1) * width
        })
    }

    const renderSongs = ({ index, item }: any) => {
        return (
            <Animated.View style={
                {
                    width: width,
                    // height: 600,
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                <View style={styles.artworkContainer}>
                    <Image style={styles.imgContainer} source={item.artwork} />
                </View>
            </Animated.View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>

                <View style={{ width: width }}>
                    <Animated.FlatList ref={songSlider} data={songsData} renderItem={renderSongs} keyExtractor={item => item.id} horizontal pagingEnabled showsHorizontalScrollIndicator={false} scrollEventThrottle={16} onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: { x: scrollX }
                            }
                        }], { useNativeDriver: true }
                    )} />
                </View>

                <View>
                    <Text style={styles.songTitle}>{songsData[songIndex].title}</Text>
                    <Text style={styles.artistName}>{songsData[songIndex].artist}</Text>
                </View>

                <View style={{ paddingHorizontal: 25 }}>
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
                    <TouchableOpacity onPress={moveBackward}>
                        <Ionicons name='play-skip-back-outline' size={30} color="#777777" style={{ marginTop: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ios-pause-circle' size={75} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={moveForward}>
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
        marginTop: 10,
        fontWeight: "300",
        color: "#fff"
    },
    progress: {
        // width: "80%",
        // justifyContent: "center",
        // alignItems: "center"
    },
    progressContainer: {
        flexDirection: 'row',
        marginTop: 15,
        height: 40,
        width: "85%",
        justifyContent: "center",
        alignSelf: "center"
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
        alignContent: "center",

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
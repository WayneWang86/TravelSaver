import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
        <View
            style={styles.quarantineDetailsView}>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    alignSelf: "center",
                    top: 0,
                    bottom: 0,
                    justifyContent: "center",
                }}>
                <View
                    style={styles.rectangleView}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    left: 156,
                    right: 28,
                    top: 89,
                    height: 947,
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-end",
                        width: 1440,
                        height: 96,
                    }}>
                    <View
                        style={styles.rectangleTwoView}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            right: 40,
                            width: 479,
                            top: 24,
                            height: 48,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                        }}>
                        <TouchableOpacity
                            onPress={this.onShapePressed}
                            style={styles.shapeButton}/>
                        <Image
                            source={require("../assets/images/shape-116.png")}
                            style={styles.shapeTenImage}/>
                        <Image
                            source={require("../assets/images/shape-112.png")}
                            style={styles.shapeElevenImage}/>
                        <View
                            style={styles.rectangleThreeView}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-110.png")}
                        style={styles.shapeTwelveImage}/>
                </View>
                <Image
                    source={require("../assets/images/shape-15.png")}
                    style={styles.shapeSevenImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 38,
                        marginLeft: 11,
                        marginRight: 533,
                        marginTop: 67,
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-105.png")}
                        style={styles.shapeTwoImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <Image
                        source={require("../assets/images/shape-53.png")}
                        style={styles.shapeFourImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 636,
                        marginLeft: 9,
                        marginRight: 137,
                        marginTop: 16,
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 563,
                            height: 627,
                            marginTop: 9,
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("../assets/images/shape-59.png")}
                            style={styles.shapeImage}/>
                        <Image
                            source={require("../assets/images/shape-11.png")}
                            style={styles.shapeThreeImage}/>
                        <Image
                            source={require("../assets/images/shape-17.png")}
                            style={styles.shapeSixImage}/>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 625,
                            height: 626,
                            alignItems: "flex-end",
                        }}>
                        <Image
                            source={require("../assets/images/shape-107.png")}
                            style={styles.shapeEightImage}/>
                        <Image
                            source={require("../assets/images/shape-69.png")}
                            style={styles.shapeFiveImage}/>
                        <Image
                            source={require("../assets/images/shape-52.png")}
                            style={styles.shapeNineImage}/>
                    </View>
                </View>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
	quarantineDetailsView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleView: {
		backgroundColor: "white",
		width: 1580,
		height: 1082,
	},
	rectangleTwoView: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 1440,
		top: 0,
		height: 96,
	},
	shapeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeButtonImage: {
		resizeMode: "contain",
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 54,
		height: 11,
		marginRight: 38,
		marginTop: 18,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleThreeView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		width: 95,
		height: 48,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 61,
		width: 53,
		top: 42,
		height: 14,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 656,
		height: 74,
		marginTop: 19,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 193,
		height: 32,
		marginTop: 6,
	},
	shapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 226,
		height: 32,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 527,
		height: 187,
	},
	shapeThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 114,
		height: 26,
		marginTop: 44,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 563,
		height: 339,
		marginTop: 31,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 619,
		height: 330,
		marginRight: 6,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 281,
		height: 33,
		marginRight: 344,
		marginTop: 49,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 624,
		height: 195,
		marginTop: 19,
	},
})
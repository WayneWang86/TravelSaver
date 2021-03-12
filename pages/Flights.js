import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
        <View
            style={styles.flightsView}>
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
                    left: 112,
                    right: 28,
                    top: 89,
                    bottom: 198,
                    alignItems: "flex-end",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
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
                            style={styles.shapeTwelveImage}/>
                        <Image
                            source={require("../assets/images/shape-112.png")}
                            style={styles.shapeThirteenImage}/>
                        <View
                            style={styles.rectangleThreeView}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-110.png")}
                        style={styles.shapeFourteenImage}/>
                </View>
                <Image
                    source={require("../assets/images/shape-32.png")}
                    style={styles.shapeImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "stretch",
                        height: 32,
                        marginLeft: 3,
                        marginRight: 340,
                        marginTop: 65,
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-50.png")}
                        style={styles.shapeTwoImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <Image
                        source={require("../assets/images/shape-72.png")}
                        style={styles.shapeFourImage}/>
                </View>
                <Image
                    source={require("../assets/images/shape-42.png")}
                    style={styles.shapeThreeImage}/>
                <Image
                    source={require("../assets/images/shape-90.png")}
                    style={styles.shapeEightImage}/>
                <Image
                    source={require("../assets/images/shape-95.png")}
                    style={styles.shapeTenImage}/>
                <Image
                    source={require("../assets/images/shape-33.png")}
                    style={styles.shapeNineImage}/>
                <Image
                    source={require("../assets/images/shape-55.png")}
                    style={styles.shapeSixImage}/>
                <Image
                    source={require("../assets/images/shape-73.png")}
                    style={styles.shapeSevenImage}/>
                <Image
                    source={require("../assets/images/shape-44.png")}
                    style={styles.shapeFiveImage}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-start",
                        width: 874,
                        height: 173,
                    }}>
                    <Image
                        source={require("../assets/images/shape-71.png")}
                        style={styles.shapeElevenImage}/>
                    <Image
                        source={require("../assets/images/map.png")}
                        style={styles.mapImage}/>
                </View>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: "center",
                }}>
                <Image
                    source={require("../assets/images/screen-shot-2021-02-18-at-1230-1.png")}
                    style={styles.screenShot20210218At12301Image}/>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
	flightsView: {
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
	shapeButtonImage: {
		resizeMode: "contain",
	},
	shapeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
	shapeFourteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 61,
		width: 53,
		top: 42,
		height: 14,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 479,
		height: 72,
		marginLeft: 6,
		marginTop: 10,
	},
	shapeTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 271,
		height: 32,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 245,
		height: 26,
	},
	shapeThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 342,
		height: 18,
		marginRight: 242,
		marginTop: 34,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 75,
		height: 13,
		marginRight: 506,
		marginTop: 34,
	},
	shapeTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 189,
		height: 53,
		marginRight: 395,
		marginTop: 21,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 224,
		height: 16,
		marginRight: 360,
		marginTop: 34,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 295,
		height: 77,
		marginRight: 289,
		marginTop: 18,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 180,
		height: 16,
		marginRight: 404,
		marginTop: 30,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 473,
		height: 133,
		marginRight: 112,
		marginTop: 18,
	},
	shapeElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		width: 874,
		bottom: 0,
		height: 173,
	},
	mapImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 1,
		width: 872,
		bottom: 1,
		height: 171,
	},
	screenShot20210218At12301Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 813,
		height: 407,
		marginLeft: 113,
	},
})
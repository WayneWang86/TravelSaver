import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
        <View
            style={styles.testingView}>
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
                    left: -10,
                    right: 47,
                    top: 89,
                    height: 882,
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-end",
                        width: 1403,
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
                        <Image
                            source={require("../assets/images/shape-39.png")}
                            style={styles.shapeTwelveImage}/>
                        <Image
                            source={require("../assets/images/shape-116.png")}
                            style={styles.shapeThirteenImage}/>
                        <Image
                            source={require("../assets/images/shape-112.png")}
                            style={styles.shapeFourteenImage}/>
                        <View
                            style={styles.rectangleThreeView}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-110.png")}
                        style={styles.shapeFifteenImage}/>
                </View>
                <Image
                    source={require("../assets/images/shape-63.png")}
                    style={styles.shapeImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 33,
                        marginLeft: 135,
                        marginRight: 408,
                        marginTop: 80,
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-118.png")}
                        style={styles.shapeTwoImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <Image
                        source={require("../assets/images/shape-89.png")}
                        style={styles.shapeFourImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 585,
                        marginRight: 194,
                        marginTop: 7,
                    }}>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            right: 0,
                            width: 458,
                            top: 30,
                            height: 478,
                            alignItems: "flex-end",
                        }}>
                        <Image
                            source={require("../assets/images/shape-80.png")}
                            style={styles.shapeThreeImage}/>
                        <Image
                            source={require("../assets/images/shape-8.png")}
                            style={styles.shapeEightImage}/>
                        <Image
                            source={require("../assets/images/shape-3.png")}
                            style={styles.shapeTenImage}/>
                        <Image
                            source={require("../assets/images/shape-45.png")}
                            style={styles.shapeNineImage}/>
                        <Image
                            source={require("../assets/images/shape-74.png")}
                            style={styles.shapeSixImage}/>
                        <Image
                            source={require("../assets/images/shape-109.png")}
                            style={styles.shapeSevenImage}/>
                        <Image
                            source={require("../assets/images/shape-29.png")}
                            style={styles.shapeFiveImage}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-87.png")}
                        style={styles.shapeElevenImage}/>
                    <View
                        style={styles.pathView}/>
                    <Image
                        source={require("../assets/images/image-30.png")}
                        style={styles.imageImage}/>
                </View>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
	testingView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleView: {
		backgroundColor: "white",
		width: 1543,
		height: 1082,
	},
	rectangleTwoView: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 1403,
		top: 0,
		height: 96,
	},
	shapeTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 54,
		height: 11,
		marginRight: 38,
		marginTop: 18,
	},
	shapeThirteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeFourteenImage: {
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
	shapeFifteenImage: {
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
		width: 491,
		height: 72,
		marginLeft: 139,
		marginTop: 9,
	},
	shapeTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 536,
		height: 33,
	},
	shapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 245,
		height: 26,
	},
	shapeThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 299,
		height: 38,
		marginRight: 159,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 95,
		height: 16,
		marginRight: 361,
		marginTop: 17,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 166,
		height: 50,
		marginRight: 292,
		marginTop: 19,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 13,
		marginRight: 421,
		marginTop: 42,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 377,
		height: 34,
		marginRight: 80,
		marginTop: 22,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 87,
		height: 13,
		marginRight: 370,
		marginTop: 36,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 458,
		height: 155,
		marginTop: 23,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 300,
		width: 148,
		top: 164,
		height: 11,
	},
	pathView: {
		backgroundColor: "rgb(25, 47, 243)",
		position: "absolute",
		right: 300,
		width: 150,
		top: 175,
		height: 1,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 972,
		top: 0,
		height: 585,
	},
})

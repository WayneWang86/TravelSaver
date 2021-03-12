import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
        <View
            style={styles.timelineplannerView}>
            <ScrollView
                style={styles.viewScrollView}>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-end",
                        width: 479,
                        height: 48,
                        marginRight: 298,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-39.png")}
                        style={styles.shapeFourImage}/>
                    <Image
                        source={require("../assets/images/shape-116.png")}
                        style={styles.shapeFiveImage}/>
                    <Image
                        source={require("../assets/images/shape-112.png")}
                        style={styles.shapeSixImage}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 95,
                            height: 48,
                        }}>
                        <View
                            style={styles.rectangleFiveView}/>
                        <Image
                            source={require("../assets/images/shape-110.png")}
                            style={styles.shapeSevenImage}/>
                    </View>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-start",
                        width: 1440,
                        height: 91,
                        marginTop: 24,
                    }}>
                    <View
                        style={styles.rectangleThreeView}/>
                    <View
                        style={styles.rectangleFourView}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            left: 53,
                            width: 536,
                            top: 35,
                            height: 23,
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("../assets/images/group-6.png")}
                            style={styles.groupImage}/>
                        <Image
                            source={require("../assets/images/group-8.png")}
                            style={styles.groupTwoImage}/>
                    </View>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 65,
                        marginLeft: 91,
                        marginRight: 349,
                        marginTop: 73,
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-108.png")}
                        style={styles.shapeImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <Image
                        source={require("../assets/images/shape-103.png")}
                        style={styles.shapeThreeImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        flex: 1,
                        marginLeft: 66,
                        marginTop: 123,
                        flexDirection: "row",
                    }}>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 27,
                            marginBottom: 654,
                        }}>
                        <View
                            pointerEvents="box-none"
                            style={{
                                position: "absolute",
                                left: 0,
                                width: 27,
                                top: 40,
                                bottom: 9,
                                alignItems: "flex-start",
                            }}>
                            <Image
                                source={require("../assets/images/path-17.png")}
                                style={styles.pathTwoImage}/>
                            <Image
                                source={require("../assets/images/path-17.png")}
                                style={styles.pathImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathThreeImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathFourImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathFiveImage}/>
                            <View
                                style={{
                                    flex: 1,
                                }}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathSixImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathSevenImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathEightImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathNineImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathTenImage}/>
                            <Image
                                source={require("../assets/images/path-14.png")}
                                style={styles.pathElevenImage}/>
                        </View>
                        <Image
                            source={require("../assets/images/path-16.png")}
                            style={styles.pathTwelveImage}/>
                    </View>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 47,
                            marginLeft: 6,
                            marginTop: 39,
                            marginBottom: 656,
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("../assets/images/shape-9.png")}
                            style={styles.shapeNineImage}/>
                        <Image
                            source={require("../assets/images/shape-22.png")}
                            style={styles.shapeEightImage}/>
                        <Image
                            source={require("../assets/images/shape-18.png")}
                            style={styles.shapeTenImage}/>
                        <Image
                            source={require("../assets/images/shape-82.png")}
                            style={styles.shapeElevenImage}/>
                        <Image
                            source={require("../assets/images/shape-77.png")}
                            style={styles.shapeTwelveImage}/>
                        <View
                            style={{
                                flex: 1,
                            }}/>
                        <Image
                            source={require("../assets/images/shape-38.png")}
                            style={styles.shapeThirteenImage}/>
                        <Image
                            source={require("../assets/images/shape-60.png")}
                            style={styles.shapeFourteenImage}/>
                        <Image
                            source={require("../assets/images/shape-26.png")}
                            style={styles.shapeFifteenImage}/>
                        <Image
                            source={require("../assets/images/shape-113.png")}
                            style={styles.shapeSixteenImage}/>
                        <Image
                            source={require("../assets/images/shape-6.png")}
                            style={styles.shapeSeventeenImage}/>
                        <Image
                            source={require("../assets/images/shape-114.png")}
                            style={styles.shapeEighteenImage}/>
                    </View>
                    <View
                        pointerEvents="box-none"
                        style={{
                            flex: 1,
                            marginLeft: 43,
                            marginTop: 41,
                        }}>
                        <View
                            style={styles.rectangleView}/>
                        <View
                            pointerEvents="box-none"
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 361,
                                top: 0,
                                bottom: 669,
                            }}>
                            <View
                                pointerEvents="box-none"
                                style={{
                                    height: 87,
                                    marginRight: 2,
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                }}>
                                <View
                                    style={styles.rectangleTwoView}/>
                                <Image
                                    source={require("../assets/images/group-22.png")}
                                    style={styles.groupSeventeenImage}/>
                            </View>
                            <View
                                pointerEvents="box-none"
                                style={{
                                    height: 183,
                                    marginRight: 4,
                                    marginTop: 21,
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                }}>
                                <TouchableOpacity
                                    onPress={this.onRectanglePressed}
                                    style={styles.rectangleButton}/>
                                <View
                                    style={{
                                        flex: 1,
                                    }}/>
                                <View
                                    pointerEvents="box-none"
                                    style={{
                                        width: 1248,
                                        height: 168,
                                        alignItems: "flex-end",
                                    }}>
                                    <Image
                                        source={require("../assets/images/group-21.png")}
                                        style={styles.groupEightImage}/>
                                    <Image
                                        source={require("../assets/images/group-24.png")}
                                        style={styles.groupNineImage}/>
                                    <Image
                                        source={require("../assets/images/group-14.png")}
                                        style={styles.groupSevenImage}/>
                                    <Image
                                        source={require("../assets/images/group-38.png")}
                                        style={styles.groupSixImage}/>
                                </View>
                            </View>
                            <View
                                pointerEvents="box-none"
                                style={{
                                    flex: 1,
                                    marginTop: 17,
                                    flexDirection: "row",
                                }}>
                                <View
                                    pointerEvents="box-none"
                                    style={{
                                        width: 191,
                                        marginTop: 1,
                                        alignItems: "flex-start",
                                    }}>
                                    <TouchableOpacity
                                        onPress={this.onRectangleTwoPressed}
                                        style={styles.rectangleTwoButton}/>
                                    <TouchableOpacity
                                        onPress={this.onRectangleThreePressed}
                                        style={styles.rectangleThreeButton}/>
                                </View>
                                <View
                                    pointerEvents="box-none"
                                    style={{
                                        flex: 1,
                                        marginLeft: 72,
                                        marginBottom: 9,
                                    }}>
                                    <View
                                        style={styles.rectangleSixView}/>
                                    <Image
                                        source={require("../assets/images/group-12.png")}
                                        style={styles.groupTwelveImage}/>
                                    <Image
                                        source={require("../assets/images/group-32.png")}
                                        style={styles.groupTenImage}/>
                                    <Image
                                        source={require("../assets/images/group-20.png")}
                                        style={styles.groupFifteenImage}/>
                                    <Image
                                        source={require("../assets/images/group-26.png")}
                                        style={styles.groupSixteenImage}/>
                                    <View
                                        style={{
                                            flex: 1,
                                        }}/>
                                    <Image
                                        source={require("../assets/images/group-34.png")}
                                        style={styles.groupFourteenImage}/>
                                    <Image
                                        source={require("../assets/images/group.png")}
                                        style={styles.groupEighteenImage}/>
                                    <Image
                                        source={require("../assets/images/group-45.png")}
                                        style={styles.groupTwentyImage}/>
                                    <Image
                                        source={require("../assets/images/group-37.png")}
                                        style={styles.groupNineteenImage}/>
                                    <Image
                                        source={require("../assets/images/group-35.png")}
                                        style={styles.groupTwentyOneImage}/>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={this.onShapePressed}
                            style={styles.shapeButton}/>
                        <Image
                            source={require("../assets/images/shape-61.png")}
                            style={styles.shapeTwoImage}/>
                        <TouchableOpacity
                            onPress={this.onShapeTwoPressed}
                            style={styles.shapeTwoButton}/>
                        <TouchableOpacity
                            onPress={this.onShapeThreePressed}
                            style={styles.shapeThreeButton}/>
                        <View
                            pointerEvents="box-none"
                            style={{
                                position: "absolute",
                                left: 259,
                                right: 363,
                                top: 308,
                                height: 132,
                                alignItems: "flex-end",
                            }}>
                            <Image
                                source={require("../assets/images/group-16.png")}
                                style={styles.groupFiveImage}/>
                            <Image
                                source={require("../assets/images/shape-78.png")}
                                style={styles.shapeNineteenImage}/>
                            <Image
                                source={require("../assets/images/group-33.png")}
                                style={styles.groupThreeImage}/>
                        </View>
                        <Image
                            source={require("../assets/images/group-7.png")}
                            style={styles.groupFourImage}/>
                        <Image
                            source={require("../assets/images/group-41.png")}
                            style={styles.groupElevenImage}/>
                        <Image
                            source={require("../assets/images/group-15.png")}
                            style={styles.groupThirteenImage}/>
                        <View
                            pointerEvents="box-none"
                            style={{
                                position: "absolute",
                                left: 27,
                                width: 557,
                                top: 67,
                                bottom: 738,
                                alignItems: "flex-start",
                            }}>
                            <Image
                                source={require("../assets/images/testing-1.png")}
                                style={styles.testing1Image}/>
                            <Image
                                source={require("../assets/images/testing.png")}
                                style={styles.testingImage}/>
                            <View
                                style={{
                                    flex: 1,
                                }}/>
                            <View
                                pointerEvents="box-none"
                                style={{
                                    width: 137,
                                    height: 60,
                                    marginBottom: 449,
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                }}>
                                <Image
                                    source={require("../assets/images/bus.png")}
                                    style={styles.busImage}/>
                                <Image
                                    source={require("../assets/images/bullet-train.png")}
                                    style={styles.bulletTrainImage}/>
                            </View>
                            <Image
                                source={require("../assets/images/shape-28.png")}
                                style={styles.shapeTwentyImage}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                style={styles.groupView}/>
        </View>
    );
  };

  const styles = StyleSheet.create({
	timelineplannerView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: -3,
		right: -423,
		bottom: -938,
		height: 2169,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 54,
		height: 11,
		marginRight: 38,
		marginTop: 18,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleFiveView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		position: "absolute",
		right: 0,
		width: 95,
		top: 0,
		height: 48,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 21,
		width: 53,
		top: 18,
		height: 14,
	},
	rectangleThreeView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 1440,
		top: 0,
		height: 91,
	},
	rectangleFourView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 1440,
		top: 0,
		height: 91,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 183,
		height: 23,
	},
	groupTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 220,
		height: 23,
		marginLeft: 133,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 355,
		height: 65,
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 200,
		height: 17,
		marginTop: 11,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 1,
		marginTop: 111,
	},
	pathThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginLeft: 3,
		marginTop: 86,
	},
	pathFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginLeft: 4,
		marginTop: 86,
	},
	pathFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
		marginTop: 86,
	},
	pathSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
		marginBottom: 86,
	},
	pathSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
		marginBottom: 92,
	},
	pathEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 7,
		marginBottom: 98,
	},
	pathNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
		marginBottom: 92,
	},
	pathTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
		marginBottom: 185,
	},
	pathElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 6,
	},
	pathTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 8,
		width: 10,
		bottom: 0,
		height: 1091,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 11,
		marginLeft: 1,
		marginTop: 103,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 11,
		marginLeft: 3,
		marginTop: 78,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 3,
		marginTop: 78,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
		marginTop: 78,
	},
	shapeThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
		marginBottom: 78,
	},
	shapeFourteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
		marginBottom: 84,
	},
	shapeFifteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 7,
		marginBottom: 90,
	},
	shapeSixteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
		marginBottom: 84,
	},
	shapeSeventeenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
		marginBottom: 177,
	},
	shapeEighteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 6,
	},
	rectangleView: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 1799,
		bottom: 0,
		height: 1686,
	},
	rectangleTwoView: {
		backgroundColor: "rgb(162, 140, 248)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 87,
	},
	groupSeventeenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		flex: 1,
		height: 30,
		marginLeft: 74,
	},
	rectangleButton: {
		backgroundColor: "rgb(254, 198, 46)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 191,
		height: 182,
		marginTop: 1,
	},
	rectangleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleButtonImage: {
		resizeMode: "contain",
	},
	groupEightImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1246,
		height: 30,
	},
	groupNineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1246,
		height: 30,
		marginRight: 2,
		marginTop: 15,
	},
	groupSevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1246,
		height: 31,
		marginRight: 2,
		marginTop: 15,
	},
	groupSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1246,
		height: 31,
		marginRight: 2,
		marginTop: 16,
	},
	rectangleTwoButton: {
		backgroundColor: "rgb(87, 89, 251)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 191,
		height: 151,
	},
	rectangleTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleTwoButtonImage: {
		resizeMode: "contain",
	},
	rectangleThreeButton: {
		backgroundColor: "rgb(44, 189, 251)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		flex: 1,
		width: 191,
		marginTop: 23,
	},
	rectangleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleThreeButtonImage: {
		resizeMode: "contain",
	},
	rectangleSixView: {
		backgroundColor: "white",
		alignSelf: "flex-end",
		width: 1107,
		height: 230,
		marginRight: 143,
	},
	groupTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginTop: 46,
	},
	groupTenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupFifteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupSixteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupFourteenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupEighteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupTwentyImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupNineteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginBottom: 13,
	},
	groupTwentyOneImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 59,
		width: 66,
		top: 193,
		height: 19,
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
	shapeTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 47,
		width: 103,
		top: 36,
		height: 19,
	},
	shapeTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 73,
		width: 49,
		top: 382,
		height: 19,
	},
	shapeTwoButtonImage: {
		resizeMode: "contain",
	},
	shapeTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 47,
		width: 97,
		top: 753,
		height: 17,
	},
	shapeThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeThreeButtonImage: {
		resizeMode: "contain",
	},
	groupFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 36,
	},
	shapeNineteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 35,
		height: 13,
		marginLeft: 26,
		marginTop: 20,
	},
	groupThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 35,
		marginRight: 2,
		marginTop: 28,
	},
	groupFourImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: 363,
		width: 1250,
		top: 357,
		height: 35,
	},
	groupElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 263,
		right: 361,
		top: 533,
		height: 36,
	},
	groupThirteenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 263,
		right: 361,
		top: 482,
		height: 36,
	},
	testing1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
		marginLeft: 38,
	},
	testingImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
		marginLeft: 38,
		marginTop: 144,
	},
	busImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
	},
	bulletTrainImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
		marginLeft: 17,
	},
	shapeTwentyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 312,
		height: 13,
		marginLeft: 245,
	},
	groupView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: -62,
		width: 1250,
		bottom: -260,
		height: 1026,
	},
})

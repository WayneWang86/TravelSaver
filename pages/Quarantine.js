import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const Quarantine = ({ navigation }) => {
    return (
    <View
        style={styles.quarantineView}>
        <View
            pointerEvents="box-none"
            style={{
                alignSelf: "flex-end",
                width: 1440,
                height: 96,
                marginRight: 89,
                marginTop: 5,
            }}>
            <Image
                style={styles.rectangleImage}/>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    right: 40,
                    width: 479,
                    top: 19,
                    height: 48,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                }}>
                {/* <TouchableOpacity
                    onPress={this.onShapePressed}
                    style={styles.shapeTwoButton}/> */}
                <Image
                    source={require("../assets/images/shape-116.png")}
                    style={styles.shapeSevenImage}/>
                <Image
                    source={require("../assets/images/shape-112.png")}
                    style={styles.shapeEightImage}/>
                <View
                    style={styles.rectangleView}/>
            </View>
            <Image
                source={require("../assets/images/shape-110.png")}
                style={styles.shapeNineImage}/>
        </View>
        <Image
            source={require("../assets/images/shape-14.png")}
            style={styles.shapeImage}/>
        <View
            pointerEvents="box-none"
            style={{
                height: 34,
                marginLeft: 101,
                marginRight: 362,
                marginTop: 65,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/shape-97.png")}
                style={styles.shapeTwoImage}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <Image
                source={require("../assets/images/shape-30.png")}
                style={styles.shapeFourImage}/>
        </View>
        <View
            pointerEvents="box-none"
            style={{
                height: 564,
                marginLeft: 90,
                marginRight: 174,
                marginTop: 33,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    width: 769,
                    height: 564,
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/image-30.png")}
                    style={styles.image30Image}/>
                <Image
                    source={require("../assets/images/shape-91.png")}
                    style={styles.shapeThreeImage}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <Image
                source={require("../assets/images/shape-65.png")}
                style={styles.shapeFiveImage}/>
        </View>
        <View
            pointerEvents="box-none"
            style={{
                alignSelf: "flex-end",
                width: 342,
                height: 23,
                marginRight: 317,
                marginTop: 32,
            }}>
            <View
                style={styles.pathView}/>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    right: 0,
                    width: 342,
                    top: 0,
                    height: 23,
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        position: "absolute",
                        right: 1,
                        width: 340,
                        top: 0,
                        height: 23,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <View
                        style={styles.pathTwoView}/>
                    {/* <TouchableOpacity
                        onPress={this.onShapeTwoPressed}
                        style={styles.shapeButton}/> */}
                </View>
                <View
                    style={styles.pathThreeView}/>
            </View>
        </View>
        <View
            style={{
                flex: 1,
            }}/>
        <Image
            source={require("../assets/images/shape-57.png")}
            style={styles.shapeSixImage}/>
    </View>
    );
  };

  const styles = StyleSheet.create({
	quarantineView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 1440,
		top: 0,
		height: 96,
	},
	shapeTwoButton: {
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
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 14,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		width: 95,
		height: 48,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 61,
		width: 53,
		top: 37,
		height: 14,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 409,
		height: 74,
		marginLeft: 152,
		marginTop: 3,
	},
	shapeTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 666,
		height: 34,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 295,
		height: 33,
	},
	image30Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 769,
		height: 509,
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 473,
		height: 34,
		marginTop: 21,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 485,
		height: 548,
		marginTop: 16,
	},
	pathView: {
		backgroundColor: "black",
		position: "absolute",
		right: 333,
		width: 7,
		top: 10,
		height: 3,
	},
	pathTwoView: {
		backgroundColor: "black",
		width: 18,
		height: 1,
		marginRight: 1,
		marginTop: 21,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 322,
		height: 23,
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
	pathThreeView: {
		backgroundColor: "rgb(25, 47, 243)",
		position: "absolute",
		right: 0,
		width: 324,
		top: 21,
		height: 1,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-start",
		width: 877,
		height: 160,
		marginLeft: 58,
		marginBottom: 135,
	},
})

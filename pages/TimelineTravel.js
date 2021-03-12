import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
        <View
        style={styles.timelinetravelView}>
        <View
            style={styles.rectangleView}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: -2,
                right: -166,
                top: 5,
                bottom: -275,
                alignItems: "flex-start",
            }}>
            <View
                style={styles.rectangleFourView}/>
            <View
                style={styles.rectangleTwoView}/>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "stretch",
                    height: 65,
                    marginLeft: 91,
                    marginRight: 91,
                    marginTop: 73,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-108.png")}
                    style={styles.shapeNineteenImage}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/shape-103.png")}
                    style={styles.shapeImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    width: 73,
                    height: 11,
                    marginLeft: 66,
                    marginTop: 162,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-17.png")}
                    style={styles.pathTwoImage}/>
                <Image
                    source={require("../assets/images/shape-9.png")}
                    style={styles.shapeSevenImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "stretch",
                    height: 74,
                    marginLeft: 67,
                    marginRight: 107,
                    marginTop: 55,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-17.png")}
                    style={styles.pathImage}/>
                <Image
                    source={require("../assets/images/shape-22.png")}
                    style={styles.shapeSixImage}/>
                <View
                    style={styles.ovalView}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/group-21.png")}
                    style={styles.groupSixImage}/>
            </View>
            <Image
                source={require("../assets/images/group-24.png")}
                style={styles.groupSevenImage}/>
            <Image
                source={require("../assets/images/group-14.png")}
                style={styles.groupFiveImage}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 71,
                    height: 11,
                    marginLeft: 69,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathThreeImage}/>
                <Image
                    source={require("../assets/images/shape-18.png")}
                    style={styles.shapeEightImage}/>
            </View>
            <Image
                source={require("../assets/images/group-38.png")}
                style={styles.groupFourImage}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 73,
                    height: 11,
                    marginLeft: 70,
                    marginTop: 14,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathFourImage}/>
                <Image
                    source={require("../assets/images/shape-82.png")}
                    style={styles.shapeNineImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    flex: 1,
                    alignSelf: "stretch",
                    marginLeft: 72,
                    marginRight: 246,
                    marginTop: 7,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-end",
                        width: 21,
                        height: 294,
                        marginBottom: 183,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
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
                </View>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathFiveImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-end",
                        width: 41,
                        height: 302,
                        marginLeft: 12,
                        marginBottom: 175,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-60.png")}
                        style={styles.shapeTwelveImage}/>
                    <Image
                        source={require("../assets/images/shape-26.png")}
                        style={styles.shapeThirteenImage}/>
                    <Image
                        source={require("../assets/images/shape-113.png")}
                        style={styles.shapeFourteenImage}/>
                    <Image
                        source={require("../assets/images/shape-6.png")}
                        style={styles.shapeFifteenImage}/>
                </View>
                <Image
                    source={require("../assets/images/shape-77.png")}
                    style={styles.shapeTenImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "stretch",
                        width: 191,
                        marginLeft: 43,
                        marginTop: 1,
                        alignItems: "flex-start",
                    }}>
                    <View
                        style={styles.rectangleNineView}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <View
                        style={styles.rectangleTenView}/>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    style={styles.rectangleSixView}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    width: 73,
                    height: 11,
                    marginLeft: 72,
                    marginBottom: 558,
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathSixImage}/>
                <Image
                    source={require("../assets/images/shape-38.png")}
                    style={styles.shapeElevenImage}/>
            </View>
            <Image
                source={require("../assets/images/path-14.png")}
                style={styles.pathElevenImage}/>
        </View>
        <View
            style={styles.rectangleThreeView}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                right: -126,
                width: 478,
                top: 29,
                height: 48,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/shape-39.png")}
                style={styles.shapeTwoImage}/>
            <Image
                source={require("../assets/images/shape-116.png")}
                style={styles.shapeThreeImage}/>
            <Image
                source={require("../assets/images/shape-112.png")}
                style={styles.shapeFourImage}/>
            <View
                style={styles.rectangleFiveView}/>
        </View>
        <Image
            source={require("../assets/images/shape-110.png")}
            style={styles.shapeFiveImage}/>
        <Image
            source={require("../assets/images/path-16.png")}
            style={styles.pathTwelveImage}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 446,
                right: -61,
                top: 802,
                height: 132,
                alignItems: "flex-end",
            }}>
            <Image
                source={require("../assets/images/group-16.png")}
                style={styles.groupThreeImage}/>
            <Image
                source={require("../assets/images/shape-78.png")}
                style={styles.shapeSeventeenImage}/>
            <Image
                source={require("../assets/images/group-33.png")}
                style={styles.groupImage}/>
        </View>
        <Image
            source={require("../assets/images/group-7.png")}
            style={styles.groupTwoImage}/>
        <View
            style={styles.groupView}>
            <Image
                source={require("../assets/images/group-22.png")}
                style={styles.groupFifteenImage}/>
            <Image
                source={require("../assets/images/group-15.png")}
                style={styles.groupElevenImage}/>
            <Image
                source={require("../assets/images/group-41.png")}
                style={styles.groupNineImage}/>
            <Image
                source={require("../assets/images/group-12.png")}
                style={styles.groupTenImage}/>
            <Image
                source={require("../assets/images/group-32.png")}
                style={styles.groupEightImage}/>
            <Image
                source={require("../assets/images/group-20.png")}
                style={styles.groupThirteenImage}/>
            <Image
                source={require("../assets/images/group-26.png")}
                style={styles.groupFourteenImage}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <Image
                source={require("../assets/images/group-34.png")}
                style={styles.groupTwelveImage}/>
            <Image
                source={require("../assets/images/group.png")}
                style={styles.groupSixteenImage}/>
            <Image
                source={require("../assets/images/group-45.png")}
                style={styles.groupEighteenImage}/>
            <Image
                source={require("../assets/images/group-37.png")}
                style={styles.groupSeventeenImage}/>
            <Image
                source={require("../assets/images/group-35.png")}
                style={styles.groupNineteenImage}/>
        </View>
        <Image
            source={require("../assets/images/shape-28.png")}
            style={styles.shapeEighteenImage}/>
        <Image
            source={require("../assets/images/path-6.png")}
            style={styles.pathThirteenImage}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 187,
                width: 191,
                top: 494,
                height: 291,
                alignItems: "flex-start",
            }}>
            <View
                style={styles.rectangleEightView}/>
            <View
                style={styles.rectangleSevenView}/>
        </View>
        <Image
            source={require("../assets/images/shape-83.png")}
            style={styles.shapeTwentyImage}/>
        <Image
            source={require("../assets/images/shape-61.png")}
            style={styles.shapeTwentyOneImage}/>
        <Image
            source={require("../assets/images/shape-4.png")}
            style={styles.shapeTwentyTwoImage}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 51,
                width: 536,
                top: 136,
                bottom: -4,
                alignItems: "flex-start",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    width: 536,
                    height: 23,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/group-6.png")}
                    style={styles.groupTwentyImage}/>
                <Image
                    source={require("../assets/images/group-8.png")}
                    style={styles.groupTwentyOneImage}/>
            </View>
            <View
                style={styles.ovalFourView}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 143,
                    height: 58,
                    marginLeft: 159,
                    marginBottom: 254,
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                <View
                    style={styles.ovalThreeView}/>
                <View
                    style={styles.ovalTwoView}/>
            </View>
            <Image
                source={require("../assets/images/shape-27.png")}
                style={styles.shapeTwentyThreeImage}/>
        </View>
        <Image
            source={require("../assets/images/path-5.png")}
            style={styles.pathFourteenImage}/>
        <Image
            source={require("../assets/images/path-2.png")}
            style={styles.pathFifteenImage}/>
        <Image
            source={require("../assets/images/path-15.png")}
            style={styles.pathSixteenImage}/>
        <View
            style={styles.rectangleElevenView}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 0,
                right: -168,
                top: 5,
                bottom: -298,
            }}>
            <View
                style={styles.rectangleFourteenView}/>
            <View
                style={styles.rectangleTwelveView}/>
            <View
                pointerEvents="box-none"
                style={{
                    height: 58,
                    marginLeft: 99,
                    marginRight: 91,
                    marginTop: 77,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-24.png")}
                    style={styles.shapeThirtyImage}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/shape-103.png")}
                    style={styles.shapeTwentyFourImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 89,
                    marginLeft: 58,
                    marginRight: 139,
                    marginTop: 138,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-17.png")}
                    style={styles.pathEighteenImage}/>
                <Image
                    source={require("../assets/images/shape-13.png")}
                    style={styles.shapeThirtyThreeImage}/>
                <View
                    style={styles.rectangleSixteenView}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/group-39.png")}
                    style={styles.groupFortyTwoImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 199,
                    marginLeft: 59,
                    marginRight: 135,
                    marginTop: 15,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 23,
                        height: 181,
                        marginTop: 11,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/path-17.png")}
                        style={styles.pathSeventeenImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathNineteenImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentyImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 42,
                        height: 189,
                        marginLeft: 11,
                        marginTop: 10,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-12.png")}
                        style={styles.shapeThirtyTwoImage}/>
                    <Image
                        source={require("../assets/images/shape-43.png")}
                        style={styles.shapeThirtyFourImage}/>
                    <Image
                        source={require("../assets/images/shape-56.png")}
                        style={styles.shapeThirtyFiveImage}/>
                </View>
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
                        width: 1250,
                        height: 193,
                        alignItems: "flex-end",
                    }}>
                    <Image
                        source={require("../assets/images/group-4.png")}
                        style={styles.groupFortyOneImage}/>
                    <Image
                        source={require("../assets/images/group-42.png")}
                        style={styles.groupFortyImage}/>
                    <Image
                        source={require("../assets/images/group-25.png")}
                        style={styles.groupThirtyEightImage}/>
                    <Image
                        source={require("../assets/images/group-40.png")}
                        style={styles.groupThirtyNineImage}/>
                </View>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 151,
                    marginLeft: 64,
                    marginRight: 135,
                    marginTop: 8,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathTwentyOneImage}/>
                <Image
                    source={require("../assets/images/shape.png")}
                    style={styles.shapeThirtySixImage}/>
                <TouchableOpacity
                    onPress={this.onRectangleTwoPressed}
                    style={styles.rectangleTwoButton}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 1252,
                        height: 144,
                        marginTop: 3,
                        alignItems: "flex-end",
                    }}>
                    <Image
                        source={require("../assets/images/group-19.png")}
                        style={styles.groupThirtySevenImage}/>
                    <Image
                        source={require("../assets/images/group-2.png")}
                        style={styles.groupThirtySixImage}/>
                    <Image
                        source={require("../assets/images/group-13.png")}
                        style={styles.groupThirtyFiveImage}/>
                </View>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 73,
                    height: 11,
                    marginLeft: 64,
                    marginTop: 9,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/path-14.png")}
                    style={styles.pathTwentyTwoImage}/>
                <Image
                    source={require("../assets/images/shape-2.png")}
                    style={styles.shapeThirtySevenImage}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    height: 609,
                    marginLeft: 64,
                    marginRight: 135,
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 21,
                        height: 525,
                        marginBottom: 7,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentyThreeImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentyFourImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentyFiveImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentySixImage}/>
                    <Image
                        source={require("../assets/images/path-14.png")}
                        style={styles.pathTwentySevenImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 41,
                        height: 533,
                        marginLeft: 12,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-104.png")}
                        style={styles.shapeThirtyEightImage}/>
                    <Image
                        source={require("../assets/images/shape-68.png")}
                        style={styles.shapeThirtyNineImage}/>
                    <Image
                        source={require("../assets/images/shape-19.png")}
                        style={styles.shapeFortyImage}/>
                    <Image
                        source={require("../assets/images/shape-117.png")}
                        style={styles.shapeFortyOneImage}/>
                    <Image
                        source={require("../assets/images/shape-7.png")}
                        style={styles.shapeFortyTwoImage}/>
                </View>
                <TouchableOpacity
                    onPress={this.onRectangleThreePressed}
                    style={styles.rectangleThreeButton}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 1252,
                        height: 609,
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}>
                    <Image
                        source={require("../assets/images/group-31.png")}
                        style={styles.groupThirtyFourImage}/>
                    <Image
                        source={require("../assets/images/group-3.png")}
                        style={styles.groupTwentyFourImage}/>
                    <Image
                        source={require("../assets/images/group-44.png")}
                        style={styles.groupTwentyEightImage}/>
                    <Image
                        source={require("../assets/images/group-23.png")}
                        style={styles.groupThirtyThreeImage}/>
                    <Image
                        source={require("../assets/images/group-17.png")}
                        style={styles.groupTwentyNineImage}/>
                    <Image
                        source={require("../assets/images/group-18.png")}
                        style={styles.groupThirtyImage}/>
                    <Image
                        source={require("../assets/images/group-30.png")}
                        style={styles.groupThirtyTwoImage}/>
                    <Image
                        source={require("../assets/images/group-28.png")}
                        style={styles.groupThirtyOneImage}/>
                    <Image
                        source={require("../assets/images/group-43.png")}
                        style={styles.groupTwentySevenImage}/>
                    <Image
                        source={require("../assets/images/group-10.png")}
                        style={styles.groupTwentyFiveImage}/>
                    <Image
                        source={require("../assets/images/group-36.png")}
                        style={styles.groupTwentySixImage}/>
                </View>
            </View>
        </View>
        <View
            style={styles.rectangleThirteenView}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 53,
                width: 536,
                top: 136,
                height: 23,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/group-6.png")}
                style={styles.groupTwentyTwoImage}/>
            <Image
                source={require("../assets/images/group-8.png")}
                style={styles.groupTwentyThreeImage}/>
        </View>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                right: -128,
                width: 479,
                top: 29,
                height: 48,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/shape-39.png")}
                style={styles.shapeTwentyFiveImage}/>
            <Image
                source={require("../assets/images/shape-116.png")}
                style={styles.shapeTwentySixImage}/>
            <Image
                source={require("../assets/images/shape-112.png")}
                style={styles.shapeTwentySevenImage}/>
            <View
                style={styles.rectangleFifteenView}/>
        </View>
        <Image
            source={require("../assets/images/shape-110.png")}
            style={styles.shapeTwentyEightImage}/>
        <Image
            source={require("../assets/images/shape-62.png")}
            style={styles.shapeTwentyNineImage}/>
        <TouchableOpacity
            onPress={this.onShapePressed}
            style={styles.shapeButton}/>
        <Image
            source={require("../assets/images/shape-119.png")}
            style={styles.shapeThirtyOneImage}/>
        <TouchableOpacity
            onPress={this.onShapeTwoPressed}
            style={styles.shapeTwoButton}/>
        <TouchableOpacity
            onPress={this.onShapeThreePressed}
            style={styles.shapeThreeButton}/>
        <Image
            source={require("../assets/images/path-10.png")}
            style={styles.pathTwentyEightImage}/>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 213,
                width: 137,
                top: 532,
                height: 437,
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/testing-1.png")}
                style={styles.testing1Image}/>
            <Image
                source={require("../assets/images/testing.png")}
                style={styles.testingImage}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 137,
                    height: 60,
                    marginTop: 113,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/bus.png")}
                    style={styles.busImage}/>
                <Image
                    source={require("../assets/images/bullet-train.png")}
                    style={styles.bulletTrainImage}/>
            </View>
        </View>
    </View>
    );
  };

  
  const styles = StyleSheet.create({
	timelinetravelView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleView: {
		backgroundColor: "white",
		position: "absolute",
		left: 4,
		right: -166,
		top: 0,
		height: 1686,
	},
	rectangleFourView: {
		backgroundColor: "white",
		alignSelf: "flex-end",
		width: 1659,
		height: 96,
	},
	rectangleTwoView: {
		backgroundColor: "white",
		width: 1440,
		height: 91,
	},
	shapeNineteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 355,
		height: 65,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 200,
		height: 17,
		marginTop: 11,
	},
	pathTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginTop: 1,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
		marginLeft: 13,
	},
	pathImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginTop: 49,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 38,
		height: 11,
		marginLeft: 13,
		marginTop: 48,
	},
	ovalView: {
		backgroundColor: "rgb(240, 235, 229)",
		borderRadius: 29,
		borderWidth: 2,
		borderColor: "rgb(76, 75, 74)",
		borderStyle: "solid",
		width: 58,
		height: 58,
		marginLeft: 118,
	},
	groupSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1246,
		height: 30,
		marginTop: 44,
	},
	groupSevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 1246,
		height: 30,
		marginRight: 109,
		marginTop: 15,
	},
	groupFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 1246,
		height: 31,
		marginRight: 109,
		marginTop: 15,
	},
	pathThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginTop: 1,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 11,
		marginLeft: 13,
	},
	groupFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 1246,
		height: 31,
		marginRight: 109,
		marginTop: 33,
	},
	pathFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginTop: 1,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 13,
	},
	pathSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginBottom: 92,
	},
	pathEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 1,
		marginBottom: 98,
	},
	pathNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginBottom: 92,
	},
	pathTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
	},
	pathFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginTop: 72,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginBottom: 84,
	},
	shapeThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 1,
		marginBottom: 90,
	},
	shapeFourteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginBottom: 84,
	},
	shapeFifteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginTop: 72,
	},
	rectangleNineView: {
		backgroundColor: "rgb(87, 89, 251)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 151,
	},
	rectangleTenView: {
		backgroundColor: "rgb(44, 189, 251)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 552,
	},
	rectangleSixView: {
		backgroundColor: "white",
		width: 1107,
		height: 230,
	},
	pathSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginBottom: 7,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 13,
	},
	pathElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 72,
	},
	rectangleThreeView: {
		backgroundColor: "white",
		position: "absolute",
		left: -2,
		width: 1440,
		top: 101,
		height: 91,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 54,
		height: 11,
		marginRight: 38,
		marginTop: 18,
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleFiveView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		width: 95,
		height: 48,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: -105,
		width: 53,
		top: 47,
		height: 14,
	},
	pathTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 72,
		width: 10,
		bottom: -284,
		height: 1091,
	},
	groupThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 36,
	},
	shapeSeventeenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 35,
		height: 13,
		marginLeft: 26,
		marginTop: 20,
	},
	groupImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 35,
		marginRight: 2,
		marginTop: 28,
	},
	groupTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: -61,
		width: 1250,
		top: 851,
		height: 35,
	},
	groupView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: -59,
		width: 1250,
		bottom: -259,
		height: 1026,
	},
	groupFifteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 30,
		marginLeft: 2,
		marginRight: 2,
	},
	groupElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginTop: 452,
	},
	groupNineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupTenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupEightImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupThirteenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupFourteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginTop: 15,
	},
	groupTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupSixteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupEighteenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
		marginBottom: 15,
	},
	groupSeventeenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 36,
		marginBottom: 13,
	},
	groupNineteenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 36,
	},
	shapeEighteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 459,
		width: 312,
		bottom: -200,
		height: 13,
	},
	pathThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 270,
		width: 25,
		top: 575,
		height: 25,
	},
	rectangleEightView: {
		backgroundColor: "rgb(162, 140, 248)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 87,
	},
	rectangleSevenView: {
		backgroundColor: "rgb(254, 198, 46)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 182,
		marginTop: 22,
	},
	shapeTwentyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 246,
		width: 66,
		top: 687,
		height: 19,
	},
	shapeTwentyOneImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 234,
		width: 103,
		top: 530,
		height: 19,
	},
	shapeTwentyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 260,
		width: 49,
		top: 876,
		height: 19,
	},
	groupTwentyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 183,
		height: 23,
	},
	groupTwentyOneImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 220,
		height: 23,
		marginLeft: 133,
	},
	ovalFourView: {
		backgroundColor: "rgb(240, 235, 229)",
		borderRadius: 29,
		borderWidth: 2,
		borderColor: "rgb(76, 75, 74)",
		borderStyle: "solid",
		width: 58,
		height: 58,
		marginLeft: 202,
		marginTop: 607,
	},
	ovalThreeView: {
		backgroundColor: "rgb(240, 235, 229)",
		borderRadius: 29,
		borderWidth: 2,
		borderColor: "rgb(76, 75, 74)",
		borderStyle: "solid",
		width: 58,
		height: 58,
	},
	ovalTwoView: {
		backgroundColor: "rgb(240, 235, 229)",
		borderRadius: 29,
		borderWidth: 2,
		borderColor: "rgb(76, 75, 74)",
		borderStyle: "solid",
		width: 58,
		height: 58,
		marginLeft: 27,
	},
	shapeTwentyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 97,
		height: 17,
		marginLeft: 183,
	},
	pathFourteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 311,
		width: 25,
		bottom: 283,
		height: 25,
	},
	pathFifteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 226,
		width: 25,
		bottom: 283,
		height: 25,
	},
	pathSixteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 269,
		width: 25,
		top: 783,
		height: 25,
	},
	rectangleElevenView: {
		backgroundColor: "white",
		position: "absolute",
		left: 6,
		right: -168,
		top: 0,
		height: 1686,
	},
	rectangleFourteenView: {
		backgroundColor: "white",
		alignSelf: "flex-end",
		width: 1659,
		height: 96,
	},
	rectangleTwelveView: {
		backgroundColor: "white",
		alignSelf: "flex-start",
		width: 1440,
		height: 91,
	},
	shapeThirtyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 357,
		height: 58,
	},
	shapeTwentyFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 200,
		height: 17,
		marginTop: 7,
	},
	pathEighteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginTop: 1,
	},
	shapeThirtyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
		marginLeft: 13,
	},
	rectangleSixteenView: {
		backgroundColor: "rgb(162, 140, 248)",
		borderWidth: 2,
		borderColor: "rgb(135, 133, 132)",
		borderStyle: "solid",
		width: 191,
		height: 87,
		marginLeft: 50,
		marginTop: 2,
	},
	groupFortyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1246,
		height: 30,
		marginTop: 1,
	},
	pathSeventeenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
	},
	pathNineteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 2,
		marginTop: 86,
	},
	pathTwentyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginLeft: 3,
		marginTop: 86,
	},
	shapeThirtyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 11,
	},
	shapeThirtyFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 38,
		height: 11,
		marginLeft: 2,
		marginTop: 78,
	},
	shapeThirtyFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 2,
		marginTop: 78,
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
		marginLeft: 46,
		marginTop: 7,
	},
	rectangleButtonImage: {
		resizeMode: "contain",
	},
	rectangleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	groupFortyOneImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 40,
	},
	groupFortyImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 40,
		marginTop: 9,
	},
	groupThirtyEightImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 40,
		marginTop: 13,
	},
	groupThirtyNineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginTop: 11,
	},
	pathTwentyOneImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginTop: 71,
	},
	shapeThirtySixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
		marginLeft: 13,
		marginTop: 71,
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
		marginLeft: 43,
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
	groupThirtySevenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 40,
	},
	groupThirtySixImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 1250,
		height: 40,
		marginRight: 1,
		marginTop: 10,
	},
	groupThirtyFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginRight: 2,
		marginTop: 14,
	},
	pathTwentyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginTop: 1,
	},
	shapeThirtySevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 13,
	},
	pathTwentyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginBottom: 92,
	},
	pathTwentyFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
		marginLeft: 1,
		marginBottom: 98,
	},
	pathTwentyFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginBottom: 92,
	},
	pathTwentySixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 3,
		marginBottom: 228,
	},
	pathTwentySevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 3,
	},
	shapeThirtyEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
		marginBottom: 84,
	},
	shapeThirtyNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginLeft: 1,
		marginBottom: 90,
	},
	shapeFortyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 11,
		marginBottom: 84,
	},
	shapeFortyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
		marginBottom: 220,
	},
	shapeFortyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 11,
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
		width: 191,
		height: 606,
		marginLeft: 43,
		marginBottom: 1,
	},
	rectangleThreeButtonImage: {
		resizeMode: "contain",
	},
	rectangleThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	groupThirtyFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginRight: 2,
		marginBottom: 17,
	},
	groupTwentyFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupTwentyEightImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupThirtyThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupTwentyNineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupThirtyImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupThirtyTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1248,
		height: 40,
		marginRight: 2,
		marginBottom: 17,
	},
	groupThirtyOneImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginBottom: 17,
	},
	groupTwentySevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginRight: 2,
		marginBottom: 17,
	},
	groupTwentyFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginRight: 2,
		marginBottom: 16,
	},
	groupTwentySixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 1250,
		height: 40,
		marginRight: 2,
	},
	rectangleThirteenView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 1440,
		top: 101,
		height: 91,
	},
	groupTwentyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 183,
		height: 23,
	},
	groupTwentyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 220,
		height: 23,
		marginLeft: 133,
	},
	shapeTwentyFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 54,
		height: 11,
		marginRight: 38,
		marginTop: 18,
	},
	shapeTwentySixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeTwentySevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleFifteenView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		width: 95,
		height: 48,
	},
	shapeTwentyEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: -107,
		width: 53,
		top: 47,
		height: 14,
	},
	shapeTwentyNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 464,
		width: 165,
		bottom: -59,
		height: 12,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 240,
		width: 66,
		top: 660,
		height: 19,
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
	shapeThirtyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 228,
		width: 103,
		top: 503,
		height: 19,
	},
	shapeTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 254,
		width: 49,
		top: 849,
		height: 19,
	},
	shapeTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeTwoButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 228,
		width: 97,
		bottom: -5,
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
	pathTwentyEightImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 65,
		width: 3,
		bottom: -327,
		height: 1161,
	},
	testing1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
		marginLeft: 17,
	},
})

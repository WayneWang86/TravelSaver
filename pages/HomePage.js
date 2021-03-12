import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
		<View
		style={styles.frontpageView}>
		<View
			pointerEvents="box-none"
			style={{
				position: "absolute",
				left: 0,
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
				left: 94,
				width: 1440,
				top: 43,
				height: 1174,
				alignItems: "flex-start",
			}}>
			<View
				style={styles.rectangleElevenView}/>
			<View
				style={styles.rectangleSixView}/>
			<View
				style={styles.rectangleTwoView}/>
		</View>
		<View
			pointerEvents="box-none"
			style={{
				position: "absolute",
				left: 103,
				right: 94,
				top: 773,
				bottom: 80,
			}}>
			<View
				pointerEvents="box-none"
				style={{
					height: 16,
					marginLeft: 124,
					marginRight: 218,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<Image
					source={require("../assets/images/shape-20.png")}
					style={styles.shapeImage}/>
				<Image
					source={require("../assets/images/shape-31.png")}
					style={styles.shapeEightImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-54.png")}
					style={styles.shapeSixteenImage}/>
				<Image
					source={require("../assets/images/shape-93.png")}
					style={styles.shapeTwentyThreeImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					height: 14,
					marginLeft: 124,
					marginRight: 147,
					marginTop: 24,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<Image
					source={require("../assets/images/shape-111.png")}
					style={styles.shapeTwoImage}/>
				<Image
					source={require("../assets/images/shape-94.png")}
					style={styles.shapeNineImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-36.png")}
					style={styles.shapeSeventeenImage}/>
				<Image
					source={require("../assets/images/shape-79.png")}
					style={styles.shapeTwentyFourImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					height: 14,
					marginLeft: 125,
					marginRight: 178,
					marginTop: 24,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<Image
					source={require("../assets/images/shape-10.png")}
					style={styles.shapeThreeImage}/>
				<Image
					source={require("../assets/images/shape-40.png")}
					style={styles.shapeTenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-96.png")}
					style={styles.shapeEighteenImage}/>
				<Image
					source={require("../assets/images/shape-16.png")}
					style={styles.shapeTwentyFiveImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					height: 14,
					marginLeft: 125,
					marginRight: 238,
					marginTop: 24,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<Image
					source={require("../assets/images/shape-106.png")}
					style={styles.shapeFourImage}/>
				<Image
					source={require("../assets/images/shape-35.png")}
					style={styles.shapeElevenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-99.png")}
					style={styles.shapeNineteenImage}/>
				<Image
					source={require("../assets/images/shape-66.png")}
					style={styles.shapeTwentySixImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					height: 11,
					marginLeft: 125,
					marginRight: 527,
					marginTop: 24,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<Image
					source={require("../assets/images/shape-34.png")}
					style={styles.shapeFiveImage}/>
				<Image
					source={require("../assets/images/shape-21.png")}
					style={styles.shapeTwelveImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-75.png")}
					style={styles.shapeTwentyImage}/>
			</View>
			<View
				style={{
					flex: 1,
				}}/>
			<View
				pointerEvents="box-none"
				style={{
					height: 41,
					marginLeft: 125,
					marginRight: 186,
					marginBottom: 11,
					flexDirection: "row",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/shape-47.png")}
					style={styles.shapeSixImage}/>
				<Image
					source={require("../assets/images/shape-49.png")}
					style={styles.shapeThirteenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-84.png")}
					style={styles.shapeTwentyOneImage}/>
				<View
					style={styles.rectangleThreeView}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					height: 40,
					marginLeft: 125,
					marginRight: 185,
					marginBottom: 11,
					flexDirection: "row",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/shape-88.png")}
					style={styles.shapeSevenImage}/>
				<Image
					source={require("../assets/images/shape-70.png")}
					style={styles.shapeFourteenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-37.png")}
					style={styles.shapeTwentyTwoImage}/>
				<Image
					source={require("../assets/images/rectangle.png")}
					style={styles.rectangleImage}/>
			</View>
			<Image
				source={require("../assets/images/shape-86.png")}
				style={styles.shapeFifteenImage}/>
			<View
				style={styles.rectangleFiveView}/>
			<View
				pointerEvents="box-none"
				style={{
					height: 22,
					marginLeft: 130,
					marginRight: 121,
					flexDirection: "row",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/path-12.png")}
					style={styles.pathNineImage}/>
				<Image
					source={require("../assets/images/shape-100.png")}
					style={styles.shapeFortyImage}/>
				<Image
					source={require("../assets/images/path-11.png")}
					style={styles.pathTenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("../assets/images/shape-25.png")}
					style={styles.shapeFortyOneImage}/>
			</View>
		</View>
		<View
			pointerEvents="box-none"
			style={{
				position: "absolute",
				right: 291,
				width: 110,
				bottom: 286,
				height: 28,
				flexDirection: "row",
				justifyContent: "flex-end",
				alignItems: "flex-end",
			}}>
			<Image
				source={require("../assets/images/shape-101.png")}
				style={styles.shapeTwentySevenImage}/>
			<View
				pointerEvents="box-none"
				style={{
					width: 12,
					height: 24,
					marginRight: 1,
					marginBottom: 4,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<View
					pointerEvents="box-none"
					style={{
						width: 12,
						height: 7,
						marginBottom: 4,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}>
					<Image
						source={require("../assets/images/shape-98.png")}
						style={styles.shapeTwentyEightImage}/>
					<Image
						source={require("../assets/images/shape-58.png")}
						style={styles.shapeTwentyNineImage}/>
				</View>
				<Image
					source={require("../assets/images/shape-48.png")}
					style={styles.shapeThirtyFiveImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 21,
					height: 28,
					marginRight: 1,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<View
					pointerEvents="box-none"
					style={{
						width: 21,
						height: 7,
						marginBottom: 7,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}>
					<Image
						source={require("../assets/images/path-3.png")}
						style={styles.pathImage}/>
					<Image
						source={require("../assets/images/path-4.png")}
						style={styles.pathTwoImage}/>
					<View
						style={styles.pathView}/>
					<Image
						source={require("../assets/images/shape-51.png")}
						style={styles.shapeThirtyImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: 19,
						height: 13,
						marginRight: 2,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}>
					<Image
						source={require("../assets/images/shape-76.png")}
						style={styles.shapeThirtySixImage}/>
					<Image
						source={require("../assets/images/shape-76.png")}
						style={styles.shapeThirtySevenImage}/>
				</View>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 13,
					height: 24,
					marginRight: 1,
					marginBottom: 3,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<View
					pointerEvents="box-none"
					style={{
						width: 10,
						height: 7,
						marginRight: 3,
						marginBottom: 4,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}>
					<Image
						source={require("../assets/images/shape-115.png")}
						style={styles.shapeThirtyOneImage}/>
					<Image
						source={require("../assets/images/shape-46.png")}
						style={styles.shapeThirtyTwoImage}/>
				</View>
				<Image
					source={require("../assets/images/path-9.png")}
					style={styles.pathSixImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 5,
					height: 22,
					marginRight: 1,
					marginBottom: 3,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/shape-23.png")}
					style={styles.shapeThirtyThreeImage}/>
				<Image
					source={require("../assets/images/path.png")}
					style={styles.pathSevenImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 10,
					height: 24,
					marginRight: 1,
					marginBottom: 3,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<View
					pointerEvents="box-none"
					style={{
						width: 10,
						height: 7,
						marginBottom: 7,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}>
					<Image
						source={require("../assets/images/path-4.png")}
						style={styles.pathThreeImage}/>
					<Image
						source={require("../assets/images/path-7.png")}
						style={styles.pathFourImage}/>
				</View>
				<Image
					source={require("../assets/images/shape-5.png")}
					style={styles.shapeThirtyEightImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 5,
					height: 24,
					marginRight: 1,
					marginBottom: 4,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/path-13.png")}
					style={styles.pathFiveImage}/>
				<Image
					source={require("../assets/images/path-8.png")}
					style={styles.pathEightImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					width: 9,
					height: 22,
					marginBottom: 3,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<Image
					source={require("../assets/images/shape-102.png")}
					style={styles.shapeThirtyFourImage}/>
				<Image
					source={require("../assets/images/shape-81.png")}
					style={styles.shapeThirtyNineImage}/>
			</View>
		</View>
		<View
			style={styles.rectangleFourView}/>
		<View
			style={styles.pathTwoView}/>
		<View
			pointerEvents="box-none"
			style={{
				position: "absolute",
				left: 213,
				width: 1202,
				top: 271,
				height: 347,
				alignItems: "flex-start",
			}}>
			<Image
				source={require("../assets/images/clipped.png")}
				style={styles.clippedImage}/>
			<View
				style={styles.groupView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 49,
							marginLeft: 1,
							marginRight: 23,
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 453,
								height: 48,
							}}>
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
									source={require("../assets/images/group-9.png")}
									style={styles.groupImage}/>
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
								<View
									pointerEvents="box-none"
									style={{
										width: 227,
										height: 48,
										marginLeft: 226,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<View
										style={styles.rectangleSevenView}/>
									<Image
										source={require("../assets/images/group-5.png")}
										style={styles.groupTwoImage}/>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 203,
								height: 49,
								marginLeft: 32,
							}}>
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
									source={require("../assets/images/group-11.png")}
									style={styles.groupThreeImage}/>
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
								<View
									style={styles.rectangleNineView}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onShapePressed}
							style={styles.shapeButton}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 514,
							height: 48,
							marginRight: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<View
							style={styles.rectangleEightView}/>
						<Image
							source={require("../assets/images/group-27.png")}
							style={styles.groupFourImage}/>
						<View
							style={styles.rectangleTenView}/>
						<Image
							source={require("../assets/images/group-29.png")}
							style={styles.groupFiveImage}/>
						<TouchableOpacity
							onPress={this.onRectanglePressed}
							style={styles.rectangleButton}/>
					</View>
				</View>
			</View>
		</View>
		<View
			pointerEvents="box-none"
			style={{
				position: "absolute",
				right: 143,
				width: 478,
				top: 67,
				height: 48,
				flexDirection: "row",
				justifyContent: "flex-end",
				alignItems: "flex-start",
			}}>
			<TouchableOpacity
				onPress={this.onShapeTwoPressed}
				style={styles.shapeTwoButton}/>
			<TouchableOpacity
				onPress={this.onShapeThreePressed}
				style={styles.shapeThreeButton}/>
			<Image
				source={require("../assets/images/shape-112.png")}
				style={styles.shapeFortyTwoImage}/>
			<View
				style={styles.rectangleTwelveView}/>
		</View>
		<Image
			source={require("../assets/images/shape-110.png")}
			style={styles.shapeFortyThreeImage}/>
	</View>
    );
  };

  const styles = StyleSheet.create({
	frontpageView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleView: {
		backgroundColor: "white",
		width: 1440,
		height: 1174,
		marginLeft: 94,
	},
	rectangleElevenView: {
		backgroundColor: "white",
		width: 1440,
		height: 96,
	},
	rectangleSixView: {
		backgroundColor: "white",
		width: 1440,
		height: 486,
		marginTop: 47,
	},
	rectangleTwoView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 1431,
		height: 545,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 52,
		height: 13,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 127,
		height: 13,
		marginLeft: 276,
	},
	shapeSixteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 67,
		height: 16,
		marginRight: 259,
	},
	shapeTwentyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 97,
		height: 16,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 133,
		height: 12,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 154,
		height: 14,
		marginLeft: 195,
	},
	shapeSeventeenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 85,
		height: 14,
		marginRight: 240,
	},
	shapeTwentyFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 169,
		height: 12,
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 93,
		height: 11,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 120,
		height: 14,
		marginLeft: 232,
	},
	shapeEighteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 74,
		height: 12,
		marginRight: 251,
	},
	shapeTwentyFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 138,
		height: 12,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 53,
		height: 12,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 151,
		height: 14,
		marginLeft: 273,
	},
	shapeNineteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 97,
		height: 14,
		marginRight: 230,
	},
	shapeTwentySixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 76,
		height: 11,
	},
	shapeFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 11,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 162,
		height: 11,
		marginLeft: 289,
	},
	shapeTwentyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 116,
		height: 11,
	},
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 31,
		height: 14,
	},
	shapeThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 84,
		height: 14,
		marginLeft: 296,
	},
	shapeTwentyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 115,
		height: 14,
		marginRight: 208,
	},
	rectangleThreeView: {
		backgroundColor: "black",
		borderRadius: 3.5,
		width: 134,
		height: 39,
		marginBottom: 2,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 43,
		height: 11,
		marginBottom: 16,
	},
	shapeFourteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 81,
		height: 14,
		marginLeft: 283,
		marginBottom: 13,
	},
	shapeTwentyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 89,
		height: 14,
		marginRight: 234,
		marginBottom: 13,
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 135,
		height: 40,
	},
	shapeFifteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 115,
		height: 14,
		marginLeft: 452,
		marginBottom: 64,
	},
	rectangleFiveView: {
		backgroundColor: "white",
		alignSelf: "flex-end",
		width: 1440,
		height: 1,
		marginBottom: 37,
	},
	pathNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 21,
		height: 17,
		marginBottom: 2,
	},
	shapeFortyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 22,
		marginLeft: 22,
	},
	pathTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 18,
		height: 18,
		marginLeft: 24,
		marginBottom: 2,
	},
	shapeFortyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 266,
		height: 16,
		marginBottom: 2,
	},
	shapeTwentySevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 24,
		marginRight: 10,
		marginBottom: 3,
	},
	shapeTwentyEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 7,
		marginRight: 1,
	},
	shapeTwentyNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 5,
	},
	shapeThirtyFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 13,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 7,
		height: 5,
		marginRight: 1,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 5,
		marginRight: 1,
	},
	pathView: {
		backgroundColor: "white",
		width: 1,
		height: 7,
		marginRight: 1,
	},
	shapeThirtyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 5,
	},
	shapeThirtySixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 13,
		marginRight: 2,
	},
	shapeThirtySevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 13,
	},
	shapeThirtyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 5,
		marginRight: 1,
	},
	shapeThirtyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 7,
	},
	pathSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 10,
		height: 13,
	},
	shapeThirtyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 5,
		marginRight: 1,
		marginBottom: 5,
	},
	pathSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 12,
	},
	pathThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 5,
		marginRight: 3,
	},
	pathFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 3,
		height: 7,
	},
	shapeThirtyEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 10,
		marginRight: 1,
	},
	pathFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 7,
		marginBottom: 7,
	},
	pathEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5,
		height: 10,
	},
	shapeThirtyFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 5,
		height: 5,
		marginRight: 4,
		marginBottom: 7,
	},
	shapeThirtyNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 8,
		height: 10,
	},
	rectangleFourView: {
		backgroundColor: "transparent",
		borderRadius: 3.5,
		borderWidth: 1,
		borderColor: "rgb(161, 161, 161)",
		borderStyle: "solid",
		position: "absolute",
		right: 280,
		width: 134,
		bottom: 282,
		height: 39,
	},
	pathTwoView: {
		backgroundColor: "rgb(203, 212, 230)",
		position: "absolute",
		right: 94,
		width: 1440,
		bottom: 140,
		height: 1,
	},
	clippedImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 707,
		height: 244,
		marginLeft: 246,
	},
	groupView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(203, 212, 230)",
		borderStyle: "solid",
		width: 1202,
		height: 50,
		marginTop: 53,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 304,
		height: 48,
	},
	rectangleSevenView: {
		backgroundColor: "rgb(203, 212, 230)",
		width: 1,
		height: 48,
	},
	groupTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 225,
		height: 48,
		marginLeft: 1,
	},
	groupThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 203,
		height: 48,
	},
	rectangleNineView: {
		backgroundColor: "rgb(203, 212, 230)",
		width: 1,
		height: 48,
		marginLeft: 2,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 95,
		height: 16,
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
	rectangleEightView: {
		backgroundColor: "rgb(203, 212, 230)",
		width: 1,
		height: 48,
	},
	groupFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 174,
		height: 48,
	},
	rectangleTenView: {
		backgroundColor: "rgb(203, 212, 230)",
		width: 1,
		height: 48,
	},
	groupFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 200,
		height: 48,
	},
	rectangleButton: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 138,
		height: 48,
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
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 187,
		height: 15,
		marginRight: 40,
		marginTop: 18,
	},
	shapeThreeButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeFortyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 14,
		marginRight: 27,
		marginTop: 18,
	},
	rectangleTwelveView: {
		backgroundColor: "rgb(96, 93, 236)",
		borderRadius: 4,
		width: 95,
		height: 48,
	},
	shapeFortyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 164,
		width: 53,
		top: 85,
		height: 14,
	},
})

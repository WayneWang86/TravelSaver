import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {React, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from './pages/HomePage';


const Stack = createStackNavigator();
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="HomePage"
//             component={HomePage}
//           />
//           {/* <Stack.Screen
//             name="HomeView"
//             component={HomeView}
//           />
//           <Stack.Screen
//             name="PreferencesView"
//             component={PreferencesView}
//           />
//           <Stack.Screen
//             name="SignUpPage"
//             component={SignUpPage}
//           /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'yellow'
  },
  test2: {
    backgroundColor: 'green'
  }

});
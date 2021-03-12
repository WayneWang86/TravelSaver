import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, YellowBox } from 'react-native';
import { HomePage } from './pages/HomePage';
import { Flights } from './pages/Flights';
import { Quarantine } from './pages/Quarantine';
import { QuarantineDetails }  from './pages/QuarantineDetails';
import { Testing } from './pages/Testing';
import { TimelinePlanner } from './pages/TimelinePlanner';
import { TimelineTravel} from './pages/TimelineTravel';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />
          {/* <Stack.Screen
            name="Flights"
            component={Flights}
          /> */}
          {/* <Stack.Screen
            name="Quarantine"
            component={Quarantine}
          /> */}
          {/* <Stack.Screen
            name="QuarantineDetails"
            component={QuarantineDetails}
          /> */}
          {/* <Stack.Screen
            name = "Testing"
            component = {Testing}
            /> */}
          {/* <Stack.Screen
            name = "TimelinePlanner"
            component = {TimelinePlanner}
            /> */}
          {/* <Stack.Screen
            name = "TimelineTravel"
            component = {TimelineTravel}
            /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

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

// export const prefStyles = StyleSheet.create({ 
//   preferences: {
//     container: {}
//   }
// })
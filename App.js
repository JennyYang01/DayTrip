// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {createSwitchNavigator} from 'react-navigation';

// import LoginScreen from './screens/LoginScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import LoadingScreen from './screens/LoadingScreen';

// export default class App extends React.Component {
//   render () {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const AppSwitchNavigator = createSwitchNavigator({
//   LoadingScreen:LoadingScreen,
//   LoginScreen:LoginScreen,
//   DashboardScreen:DashboardScreen
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
// import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen"

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen
  }
});

const App = createAppContainer(AppNavigator)

export default App;

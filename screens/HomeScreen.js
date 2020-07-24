import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { NativeModulesProxy } from "@unimodules/core";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DayTrip',
  };
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>DayTrip</Text>
        </View>
      );
    }
  }

export default HomeScreen;
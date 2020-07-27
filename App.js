import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(AppNavigator)

export default App;

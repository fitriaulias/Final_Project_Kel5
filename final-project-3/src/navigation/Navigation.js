import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Login from "../screens/login/LoginScreen";
import SplashScreen from "../screens/splash/SplashScreen";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

const Navigation = () =>{
    return (
            <HomeStack.Navigator initialNavigation="Splash">
              <HomeStack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="Home"
                component={Home}
                options={() => ({
                  headerShown: false,
                })}
              />
    
              <HomeStack.Screen
                name="Login"
                component={Login}
                options={() => ({
                  headerShown: false,
                })}
              />
              <HomeStack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
              />
            </HomeStack.Navigator>
    );
    
}
export default Navigation;
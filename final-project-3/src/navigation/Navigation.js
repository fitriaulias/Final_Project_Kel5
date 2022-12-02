import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/home/Home";
import Login from "../screens/login/LoginScreen";
import SplashScreen from "../screens/splash/SplashScreen";
import BaliSection from "../screens/section/BaliSection";
import YogyakartaSection from "../screens/section/YogyakartaSection";
import BandungSection from "../screens/section/BandungSection";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: "#3FBC71",
        headerTintColor: "#ffffff",
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather  name="home" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Home} 
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather  name="search" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={({ navigation }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        })}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
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
      <HomeStack.Screen
        name="Bali"
        component={BaliSection}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Yogyakarta"
        component={YogyakartaSection}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Bandung"
        component={BandungSection}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
export default Navigation;

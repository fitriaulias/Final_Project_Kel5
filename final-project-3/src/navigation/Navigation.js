import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Login from "../screens/login/LoginScreen";

const HomeStack = createNativeStackNavigator();

export default function Navigation(){
    return (
            <HomeStack.Navigator>
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
            </HomeStack.Navigator>
    );
    
}
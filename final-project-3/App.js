import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Navigation from './src/navigation/Navigation';
import { Store } from './src/store/Store'

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar style="light"/>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
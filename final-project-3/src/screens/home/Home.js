import * as React from "react";
import { View, Button, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Homepimpah</Text>
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate("Login")}
      />

    </View>
  );
};

export default Home;
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const PopularDestination = ({ navigation }) => {
  const handleListBali = () => {
    navigation.navigate("Bali");
  };

  const handleListYogyakarta = () => {
    navigation.navigate("Yogyakarta");
  };

  const handleListBandung = () => {
    navigation.navigate("Bandung");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Place</Text>
      <ScrollView horizontal={true}>
        <Pressable onPress={handleListBali}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/02/21/ad/0221ad079845c3157be2a3e2bef978ce.jpg",
              }}
              style={{ width: 175, height: 240, borderRadius: 10 }}
            />
            <Text style={styles.text}>
              <EvilIcons name="location" size={17} color="white" />
              Bali
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={handleListYogyakarta}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/b7/84/dc/b784dcd68ed4e12ed039a164ef072a57.jpg",
              }}
              style={{ width: 175, height: 240, borderRadius: 10 }}
            />
            <Text style={styles.text}>
              <EvilIcons name="location" size={17} color="white" />
              Yogyakarta
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={handleListBandung}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/f2/f2/7c/f2f27c2376263ff96e687dfd7287472b.jpg",
              }}
              style={{ width: 175, height: 240, borderRadius: 10 }}
            />
            <Text style={styles.text}>
              <EvilIcons name="location" size={17} color="white" />
              Bandung
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default PopularDestination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    margin: 7,
    position: "relative",
  },
  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 17,
  },
});

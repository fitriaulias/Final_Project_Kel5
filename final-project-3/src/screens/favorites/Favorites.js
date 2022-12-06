import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import CardList from "../../components/CardList";

const Favorites = ({ navigation }) => {
  const favorite = useSelector((state) => state.favorite.hotels);
  const handleHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      {favorite.length ? (
        <View>
          <ScrollView>
            {favorite?.map((hotel) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("Detail", { id: `${hotel.hotelId}` })
                }
              >
                <CardList key={hotel.name} hotel={hotel} />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text style={styles.text}>Oops! Your favorite hotel is empty.</Text>
          <Button
            onPress={handleHome}
            title="Check your favorite hotel"
            titleStyle={{ fontWeight: "600" }}
            buttonStyle={{
              backgroundColor: "#3FBC71",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 10,
              paddingVertical: 10,
            }}
            containerStyle={{
              width: "70%",
              marginBottom: 20,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    width: "100%",
  },
  empty: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    paddingVertical: 20,
  },
});

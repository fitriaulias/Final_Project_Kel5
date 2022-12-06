import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { favoriteHotel } from "../store/reducers/FavoriteSlice";

const CardList = ({ hotel }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.hotels);

  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <View>
          <Image
            source={{ uri: `${hotel?.media?.url}` }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.rowTwo}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.location}>{hotel.location.address.cityName}</Text>
        <Text style={styles.rating}>
          <FontAwesome name="star" size={13} color="#ffa200" />
          {hotel.starRating}
        </Text>
        <View style={styles.prices}>
          <Text style={styles.price}>${hotel.ratesSummary.minPrice}</Text>
          <Text style={styles.night}>/ night</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity onPress={() => dispatch(favoriteHotel(hotel))}>
            {favorite.find((inn) => inn.name === hotel.name) ? (
              <AntDesign name="heart" size={24} color="#67b99a" />
            ) : (
              <AntDesign name="hearto" size={24} color="#6c757d" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginStart: 30,
    marginEnd: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    position: "relative",
  },
  rowOne: {
    flex: 1,
  },
  rowTwo: {
    flex: 2,
  },
  name: {
    fontSize: 15,
  },
  location: {
    color: "lightgrey",
    fontSize: 13,
  },
  rating: {
    fontSize: 13,
    letterSpacing: 1,
  },
  prices: {
    flexDirection: "row",
    width: 140,
  },
  price: {
    flex: 1,
    fontSize: 17,
    marginTop: 5,
  },
  night: {
    flex: 1,
    color: "lightgrey",
    bottom: 0,
    paddingTop: 8,
  },
  heart: {
    position: "absolute",
    right: 10,
    top: 40,
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { EvilIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { favoriteHotel } from "../store/reducers/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";

const CardDetail = ({ hotel }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.hotels);
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: `${hotel?.thumbnailUrl}` }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 8,
            marginBottom: 10,
          }}
        />
      </View>
      <View style={styles.containerName}>
        <Text style={styles.name}>{hotel?.name}</Text>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => dispatch(favoriteHotel(hotel))}
        >
          {favorite.find((inn) => inn.name === hotel.name) ? (
            <AntDesign name="heart" size={24} color="#67b99a" />
          ) : (
            <AntDesign name="hearto" size={24} color="#6c757d" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.containerAddress}>
        <Text style={styles.address}>
          <EvilIcons name="location" size={16} color="grey" />
          {hotel?.location?.address?.cityName}
        </Text>
        <Text style={styles.rating}>
          <FontAwesome name="star" size={13} color="#ffa200" />{" "}
          {hotel?.starRating}
        </Text>
      </View>
      <View style={styles.facilities}>
        <Text>FACILITIES</Text>
        <ScrollView horizontal={true}>
          <Text style={styles.features}>
            {`\t${hotel?.hotelFeatures?.features[0]}`}
            {`  `}
            {`\t${hotel?.hotelFeatures?.features[1]}`}
            {`  `}
            {`\t${hotel?.hotelFeatures?.features[2]}`}
            {`  `}
            {`\t${hotel?.hotelFeatures?.features[3]}`}
            {`  `}
            {`\t${hotel?.hotelFeatures?.features[4]}`}
          </Text>
        </ScrollView>
      </View>
      <Text>ABOUT</Text>
      <Text style={styles.description}>{hotel?.description}</Text>
      <View style={styles.heart}></View>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    padding: 25,
  },
  containerName: {
    flexDirection: "row",
  },
  name: {
    flex: 5,
    fontSize: 20,
    marginVertical: 10,
  },
  containerAddress: {
    flexDirection: "row",
  },
  address: {
    flex: 1,
    color: "grey",
    fontSize: 15,
  },
  rating: {
    flex: 1,
    textAlign: "right",
    color: "grey",
    fontSize: 15,
  },
  facilities: {
    marginVertical: 10,
  },
  features: {
    color: "grey",
    paddingVertical: 10,
  },
  description: {
    color: "grey",
    paddingTop: 10,
  },
  heart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

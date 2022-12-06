import { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Pressable } from "react-native";
import axios from "axios";
import CardList from "./CardList";
import { useNavigation } from "@react-navigation/native";

const ListHotel = ({ cityId }) => {
  const [list, setList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
        params: {
          sort_order: "HDR",
          location_id: `${cityId}`,
          date_checkout: "2022-12-16",
          date_checkin: "2022-12-15",
          star_rating_ids: "3.5,4.0,4.5,5.0",
        },
        headers: {
          "X-RapidAPI-Key":
            "ecff512fccmsh15738bc8b7d5cc9p103495jsna1ab4b4f0c97",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      })
        .then((response) => {
          setList(response.data.hotels.slice(5, 15));
        })
        .catch((error) => console.log(error.response));
    })();
  }, []);

  return (
    <View>
      <ScrollView>
        {list?.map((hotel) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Detail", { id: `${hotel.hotelId}` })
            }
          >
            <CardList key={hotel.hotelId} hotel={hotel} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListHotel;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

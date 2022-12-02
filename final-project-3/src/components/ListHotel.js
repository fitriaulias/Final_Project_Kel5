import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import axios from "axios";
import CardList from "./CardList";

const ListHotel = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
        params: {
          sort_order: "HDR",
          location_id: `${props.cityId}`,
          date_checkout: "2022-12-16",
          date_checkin: "2022-12-15",
          star_rating_ids: "4.5,5.0",
        },
        headers: {
          "X-RapidAPI-Key":
            "cdaf8fbff6msh3d9ffbb31afa015p19bde8jsn58122768197b",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      })
        .then((response) => {
          setList(response.data.hotels.slice(0, 10));
        })
        .catch((error) => console.log(error.response));
    })();
  });

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Hotels in {props.city}</Text>
        </View>
        {list?.map((hotel, index) => (
          <CardList key={index} hotel={hotel} />
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

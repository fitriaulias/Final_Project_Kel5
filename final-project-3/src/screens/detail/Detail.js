import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import CardDetail from "../../components/CardDetail";

const Detail = ({ route }) => {
  const [detail, setDetail] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/details",
        params: { hotel_id: id },
        headers: {
          "X-RapidAPI-Key":
            "ecff512fccmsh15738bc8b7d5cc9p103495jsna1ab4b4f0c97",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      })
        .then((response) => {
          setDetail(response.data);
        })
        .catch((error) => console.log(error.response));
    })();
  }),
    [];

  return (
    <View>
      <ScrollView>
        <CardDetail key={detail.hotelId} hotel={detail} />
      </ScrollView>
    </View>
  );
};

export default Detail;

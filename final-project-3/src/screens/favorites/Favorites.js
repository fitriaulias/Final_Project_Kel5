import { ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import CardList from "../../components/CardList";

const Favorites = () => {
  const favorite = useSelector((state) => state.favorite.hotels);
  return (
    <View>
      <ScrollView>
        {favorite.length ? (
          <View>
            {favorite?.map((item) => (
              <CardList key={item.name} hotel={item} />
            ))}
          </View>
        ) : (
          <Text>Empty</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Favorites;

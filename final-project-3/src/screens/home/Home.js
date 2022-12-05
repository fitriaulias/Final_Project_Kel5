import * as React from "react";
import { View, Button, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import PopularDestination from "../section/PopularDestination";
import SearchCard from "../../components/SearchCard";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Find your</Text>
        <Text style={styles.title}>destination here...</Text>
        <View style={styles}>
          <FlatList
            renderItem={({ item }) => {
              return <Card data={item} />
            }}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => <SearchCard />}
          />
        </View>
        <PopularDestination navigation={navigation} />
        <Button
          title="Go to Login Page"
          onPress={() => navigation.navigate("Login")}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e9ecef",
  },
  containerText: {
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

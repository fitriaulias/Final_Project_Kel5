import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
  
  
const Home = () => {
    const [location, setLocation] = useState("");
    const [guest, setGuest] = useState(1);
  
    const dispatch = useDispatch()
  
    
  
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(fetchHotels({ location, guest }))
    }
  
    useEffect(() => {
    }, [ guest, location])
  
  
  
    return (
      <View style={styles.search}>
        <View style={styles.Filter}>
          <View style={styles.inputFilter}>
              <TextInput 
                  style={{ flex: 1 }} 
                  placeholder="Sort by" 
              />
              <Entypo name="chevron-small-down" style={{ fontSize: 25 }} />
          </View>
          <View style={styles.inputQty}>
              <TextInput 
                  style={{ flex: 1 }} 
                  keyboardType="numeric"
                  placeholder="1" 
              />
              <Feather  name="home" style={{ fontSize: 25 }} />
          </View>
        </View>
        <View style={styles.input}>
            <TextInput 
                style={{ flex: 1 }} 
                placeholder="Enter your destination" 
            />
            <Feather name="search" style={{ fontSize: 25 }} />
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleSearch}
        >
          <Text
            style={{
              backgroundColor: "#3FBC71",
              paddingVertical: 10,
              borderRadius: 20,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    search: {
      height: "auto",
      marginTop: 20,
      marginBottom: 16,
      backgroundColor: "#FFFFFF",
      padding: 20,
      borderRadius: 10,
    },
    input: {
      height: 40,
      borderColor: "#F7F7FA",
      backgroundColor: "#F7F7FA",
      borderWidth: 1,
      paddingTop: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 5,
      borderRadius: 20,
      flexDirection: "row",
    },
    inputFilter: {
      height: 40,
      borderColor: "#F7F7FA",
      backgroundColor: "#F7F7FA",
      borderWidth: 1,        paddingTop: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 5,
      borderRadius: 20,
      flexDirection: "row",
      marginRight: 10,
      marginVertical: 10,
      width: "48%",
    },
    inputQty: {
      height: 40,
      borderColor: "#F7F7FA",
      backgroundColor: "#F7F7FA",
      borderWidth: 1,
      paddingTop: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 5,
      borderRadius: 20,
      flexDirection: "row",
      marginVertical: 10,
      width: "48%",
  },
    Filter: {
      marginBottom: 8,
      flexDirection: "row",
      display: "flex",
      width: "100%",
    },
    button: {
      paddingTop: 20,
    },
  });
  
  export default Home;
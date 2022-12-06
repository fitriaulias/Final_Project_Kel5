import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { Octicons, Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const setAuth = useSelector((state) => state.user.isAuthenticated);
  const setFirstname = useSelector((state) => state.user.user.firstName);
  const setLastname = useSelector((state) => state.user.user.lastName);
  const setAddress = useSelector((state) => state.user.user.address);
  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {setAuth ? (
        <View>
          <View style={styles.containerData}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
              }}
              style={{ width: 150, height: 150, borderRadius: 100 }}
            />
            <Text style={styles.name}>
              {setFirstname} {setLastname}
            </Text>
            <Text style={styles.address}>{setAddress}</Text>
          </View>
          <View style={styles.containerEdit}>
            <Pressable onPress={handleEditProfile}>
              <Text style={styles.edit}>
                <Octicons name="pencil" size={17} color="black" /> Edit Profile
              </Text>
            </Pressable>
          </View>
          <View style={styles.containerOrder}>
            <Pressable>
              <Text style={styles.order}>
                <Feather name="book-open" size={17} color="black" /> My Order
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.else}>
          <Pressable onPress={handleLogin}>
            <Text style={styles.elseText}>
              <SimpleLineIcons name="login" size={17} color="black" /> Login
              here.
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerData: {
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  name: {
    fontWeight: "500",
    fontSize: 20,
    marginTop: 5,
  },
  address: {
    color: "lightgrey",
  },
  containerEdit: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  edit: {
    fontSize: 18,
    padding: 10,
  },
  order: {
    fontSize: 18,
    padding: 10,
    justifyContent: "center",
  },
  containerOrder: {
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
  },
  else: {
    backgroundColor: "#3FBC71",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    borderRadius: 10,
  },
  elseText: {
    fontSize: 20,
  },
});

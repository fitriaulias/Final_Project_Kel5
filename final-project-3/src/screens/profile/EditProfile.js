import { View, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstname,
  setLastname,
  setAddress,
} from "../../store/reducers/UserSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const Firstname = useSelector((state) => state.user.user.firstName);
  const Lastname = useSelector((state) => state.user.user.lastName);
  const Address = useSelector((state) => state.user.user.address);
  return (
    <View style={styles.container}>
      <View style={styles.containerEdit}>
        <TextInput
          placeholder="First Name"
          onChangeText={(input) => dispatch(setFirstname(input))}
          value={Firstname}
          style={styles.name}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={(input) => dispatch(setLastname(input))}
          value={Lastname}
          style={styles.name}
        />
        <TextInput
          placeholder="Address"
          onChangeText={(input) => dispatch(setAddress(input))}
          value={Address}
          style={styles.address}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    width: "100%",
  },
  containerEdit: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    margin: 20,
    paddingVertical: 10,
  },
  name: {
    fontWeight: "500",
    fontSize: 20,
  },
  address: {
    color: "lightgrey",
  },
});

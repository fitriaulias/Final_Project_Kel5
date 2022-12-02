import { StyleSheet, View, Image, ToastAndroid } from "react-native";
import { Input, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Logo from '../../../assets/travelin.png'
import useAuth from "../../context/AuthContext";
import { setUser, setAuth } from "../../store/reducers/UserSlice";

export default Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const showToast = (children) => {
    ToastAndroid.show(children, ToastAndroid.LONG);
  };

  const handlePressAuth = () => {
    setIsError(false);
    const isLogin = handleLogin(email, password);
    if (isLogin) {
      const user = {
        email,
        password,
      };
      dispatch(setUser(user));
      dispatch(setAuth(true));
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate("Home");
      }

      return showToast("Yeay, login Success!");
    }
    setIsError(true);
    return showToast("username or password is wrong!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image source={Logo}/>
      </View>
      <View style={styles.formSection}>
        <Input
          placeholder="user@gmail.com"
          autoComplete="email"
          onChangeText={(e) => setEmail(e)}
          leftIcon={
            <Ionicons 
              name="mail" 
              size={20} 
              style={{ marginRight: 10 }} 
            />
          }
          errorMessage={isError && "username or password is wrong"}
        />
        <Input
          placeholder="user123"
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={isVisiblePassword ? false : true}
          leftIcon={
            <Ionicons
              onPress={() => setIsVisiblePassword(!isVisiblePassword)}
              name={isVisiblePassword ? "eye" : "eye-off"}
              size={20}
              style={{ marginRight: 10 }}
            />
          }
          errorMessage={isError && "username or password is wrong"}
        />
        <Button
          onPress={() => handlePressAuth()}
          title="Login"
          titleStyle={{ fontWeight: "600" }}
          buttonStyle={{
            backgroundColor: "#3FBC71",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 20,
            paddingVertical: 12,
          }}
          containerStyle={{
            width: "100%",
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fa",
  },
  logoSection: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formSection: {
    backgroundColor: "#ffffff",
    flex: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
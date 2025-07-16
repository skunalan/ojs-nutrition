import { View, Text, Image } from "react-native";
import React from "react";
import LoginButton from "../../components/Login-Button";

const LoginScreen = () => {
  return (
    <View>
      <Image className="mx-auto mt-20"
      source={require("../../../assets/logo-black.png")} />
      <Text className="text-center text-4xl font-bold mt-5">
        Giriş yap
      </Text>
 
      

    </View>
  );
};

export default LoginScreen;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuthStore from "../../store/auth";

const tabs = ["Giriş Yap", "Kayıt Ol"];

const OnboardingScreen = () => {
  const [activeTab, setActiveTab] = useState("Read");

  const { setLoggedIn } = useAuthStore();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <View>
        <Image
          className="mx-auto mt-20"
          source={require("../../../assets/logo-black.png")}
        />
        <Text className="text-center text-4xl font-bold mt-5"></Text>
      </View>

      <View className="flex-1 p-5">
      <View className="flex-row justify-around mb-4">
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              className={`text-lg font-bold ${
                activeTab === tab ? "color-primary underline" : "color-secondary"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>

    </>
  );
};

export default OnboardingScreen;

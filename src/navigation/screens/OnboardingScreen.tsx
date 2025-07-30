import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuthStore from "../../store/auth";
import LoginForm from "../../components/form/LoginForm";

const tabs = ["Giriş Yap", "Üye Ol"];

const OnboardingScreen = () => {
  const [activeTab, setActiveTab] = useState("Giriş Yap");

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
        <Text className="text-center text-4xl font-bold mt-6">{activeTab}</Text>
      </View>

      <View className="flex-1 px-5 mt-5">
        <View className="flex-row gap-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-3 items-center justify-center rounded-sm ${
                activeTab === tab
                  ? "bg-background border border-gray-200"
                  : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-2xl font-semibold ${
                  activeTab === tab ? "color-primary" : "color-secondary"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
          <View className="flex-1">
        {activeTab === "Giriş Yap" ? (
          <LoginForm />
        ) : (
          <Text className="text-center mt-4">Üyelik Formu</Text>
        )}
      </View>
      </View>

    
    </>
  );
};

export default OnboardingScreen;

import { View, Text } from "react-native";
import React from "react";
import FormTextInput from "./FormTextInput";

import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const { control } = useForm();

  return (
    <>
      <View className="bg-background py-4 px-3 rounded-sm border border-gray-100">
        <View>
          <FormTextInput label="E-Posta" name="email" control={control} />
        </View>
        
        <View className="mt-4 ">
        <FormTextInput
          label="Şifre"
          name="password"
          control={control}
          secureTextEntry={true}
          />
          </View>
      </View>
    </>
  );
};

export default LoginForm;

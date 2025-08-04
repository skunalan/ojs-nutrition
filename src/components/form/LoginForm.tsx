import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FormTextInput from "./FormTextInput";

import { useForm } from "react-hook-form";
import SubmitButton from "../SubmitButton";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  // Bu alan (onSubmit ve onError) kontrol amaçlıdır. Gerçek kullanımda API çağrısı yapılacak ve bu alan kaldırılacak
  // const { setLoggedIn } = useAuthStore();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const onError = (errors: any) => {
    console.error(errors);
  };
  return (
    <>
      <View className="mt-5">
        <FormTextInput
          required
          label="E-Posta"
          name="email"
          control={control}
        />
      </View>

      <View className="mt-10 ">
        <FormTextInput
          required
          label="Şifre"
          name="password"
          control={control}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text className="text-right underline mt-5">Şifremi Unuttum?</Text>
      </TouchableOpacity>
      <SubmitButton
        onPress={handleSubmit(onSubmit, onError)}
        title="Giriş Yap"
      />
    </>
  );
};

export default LoginForm;

import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import FormTextInput from "./FormTextInput";
import SubmitButton from "../SubmitButton";

const SignupForm = () => {
  const { control, handleSubmit } = useForm();

  // Bu alan (onSubmit ve onError) kontrol amaçlıdır. Gerçek kullanımda kullanıcı bilgileri API'ye gönderilecek ve bu alan kaldırılacak
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const onError = (errors: any) => {
    console.error(errors);
  };
  return (
    <>
      <View className="mt-5">
        <FormTextInput label="Ad" name="name" control={control} />
      </View>
      <View className="mt-5">
        <FormTextInput label="Soyad" name="surname" control={control} />
      </View>

      <View className="mt-5">
        <FormTextInput label="E-Posta" name="email" control={control} />
      </View>

      <View className="mt-5 ">
        <FormTextInput
          label="Şifre"
          name="password"
          control={control}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <SubmitButton
          onPress={handleSubmit(onSubmit, onError)}
          title="Üye Ol"
        />
      </TouchableOpacity>
    </>
  );
};

export default SignupForm;

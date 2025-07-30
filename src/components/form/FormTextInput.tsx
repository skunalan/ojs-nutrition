import { View, TextInput, Text } from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";

type FormTextInputProps = {
  label: string;
  name: string;
  control: Control;
  secureTextEntry?: boolean;
  required?: boolean;
};

const FormTextInput = ({
  label,
  name,
  control,
  secureTextEntry,
  required,
}: FormTextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <View className="mb-5">
            <Text>
              <Text>*</Text>
              {label}
            </Text>
          </View>
          <View className="bg-muted py-5 px-3 border border-gray-200 rounded-lg">
            <TextInput
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </>
      )}
    />
  );
};

export default FormTextInput;

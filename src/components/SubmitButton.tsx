import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type SubmitButtonProps = {
  onPress: () => void;
  title: string;
}

const SubmitButton = ({ onPress, title }: SubmitButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text className="my-6 p-5 rounded-md bg-foreground text-center text-2xl font-semibold color-muted">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubmitButton
import { View, Text, TextInput } from 'react-native'
import React from 'react'

export const SearchInput = ({ placeholder, value, onChangeText}) => {
  return (
    <TextInput
        className="h-10 bg-red-200 border border-red-300 pl-3 mb-3 rounded-2xl"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
  )
}
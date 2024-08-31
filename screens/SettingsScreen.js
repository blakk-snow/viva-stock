import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// New TeachersDictionary component
const TeachersDictionary = ({ title, message }) => (
  <View className="bg-slate-800 p-5 mb-5">
    <Text className="text-xl font-nunito-bold text-white mb-2">{title}</Text>
    <Text className="text-white font-nunito-regular">{message}</Text>
  </View>
);

const options = [
  { id: '1', name: 'CreateAssessmentRecordBook', screen: 'CreateAssessmentRecordBook', icon: 'school-outline' },
  { id: '2', name: 'ViewAssessmentRecords', screen: 'ViewAssessmentRecords', icon: 'people-outline' },
];

const SettingsScreen = ({ navigation }) => {
  const renderOption = ({ item }) => (
    <TouchableOpacity
      className='flex-row items-center py-4 border-b border-b-gray-300'
      onPress={() => navigation.navigate(item.screen)}>
      <Ionicons name={item.icon} size={24} style={{marginRight: 15, color: '#000'}} />
      <Text className='flex-1 text-lg text-black font-nunito-medium'>{item.name}</Text>
      <Ionicons name="chevron-forward-outline" size={24} style={{color: '#000'}} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1'>
      <TeachersDictionary 
        title="Teacher's Dictionary"
        message="Welcome to the Assessments section. Here you can create and view assessment records."
      />
      <View>
        <Text className='text-2xl text-center font-nunito-extrabold text-fuchsia-800'>CONTENTS</Text>
      </View>
      <FlatList
        data={options}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const navigation = useNavigation();
  return (
    <MainLayout>
      {
        <View>
          <Text>My To Do List App</Text>
          <Text>By: Nick Dimarzo</Text>
          <Text>{new Date().toDateString()}</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      }
    </MainLayout>
  );
}

export default AboutScreen;

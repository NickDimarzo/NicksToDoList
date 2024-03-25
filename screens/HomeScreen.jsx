import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to the gym',
    'Walk dog',
  ]);

  const addTask = task => {
    setItems([...items, task]);
  };

  const navigation = useNavigation();

  return (
    <MainLayout>
      {
        <SafeAreaView>
          <ToDoList items={items} />
          <ToDoForm addTask={addTask} />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      }
    </MainLayout>
  );
}

export default HomeScreen;

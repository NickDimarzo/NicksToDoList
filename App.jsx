/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to the gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView>
      <ToDoList items={items}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
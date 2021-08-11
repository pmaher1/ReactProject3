import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Home from "./components/Home";

//styled components
import {Container} from "./styles/appStyles";

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading'; 

export default function App() {
  const[ready, setReady] = useState(false);

  //initial todos
  const initialTodos = [{
    title: "Use a racket",
    date: "Fri, 20 Jan 2021 idk the time",
    key: "1",
    }, {
        title: "Get Balls",
        date: "Fri, 20 Jan 2021 idk the time",
        key: "2",
    }, {
        title: "Go to tennis",
        date: "Fri, 20 Jan 2021 idk the time",
        key: "3",
    }]

  const [todos, setTodos] = useState(initialTodos);

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos}/>
      <StatusBar style="light" />
    </Container>
  );
}

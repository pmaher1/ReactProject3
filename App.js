import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Home from "./components/Home";

//styled components
import {Container} from "./styles/appStyles";


import AppLoading from "expo-app-loading";

export default function App() {
  const [ready, setReady] = useState(false);

  //initial todos
  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos").then(data => {
      if (date !== null){
        setTodos(JSON.parse(data))
      }
    }).catch((error) => console.log(error));
  }

  if (!ready) {
    return (
      <AppLoading
        startAysnc={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos}/>
      <StatusBar style="light" />
    </Container>
  );
}

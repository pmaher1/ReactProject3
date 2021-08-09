import React, {useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
//import {Text}from 'react-native';

// components
import Header from "./Header";
import Listitems from "./Listitems";

const Home = () => {

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
        <>
            <Header />
            <Listitems 
                todos = {todos}
                setTodos = {setTodos}
            />
        </>
    );
}

export default Home;
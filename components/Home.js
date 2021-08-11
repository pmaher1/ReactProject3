import React, {useState} from 'react';


// components
import Header from "./Header";
import Listitems from "./Listitems";
import InputModal from './InputModal';

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({todos, setTodos}) => {

    // clear all todos
    const handleClearTodos = () => {
        setTodos([]);
    }

    //Modal visiblity & input value
    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

    //function to add a new todo
    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);
    }

    //Editing

    const [todoToBeEdited, setTodoToBeEdited] = useState(null);

    const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
    }

    return (
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <Listitems 
                todos = {todos}
                setTodos = {setTodos}
                handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
                handleAddTodo={handleAddTodo}
                todoToBeEdited={todoToBeEdited}
                setTodoToBeEdited={setTodoToBeEdited}
                handleEditTodo={handleEditTodo}
                todos={todos}
            />
        </>
    );
}

export default Home;
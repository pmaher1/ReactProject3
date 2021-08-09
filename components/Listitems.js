import React from 'react';

// styled components
import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors
} from "../styles/appStyles";

import {SwipeListView} from "react-native-swipe-list-view";
import {Entypo} from "@expo/vector-icons";

const ListItems = ({todos, setTodos}) => {
    return (
        <SwipeListView
            data={todos}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <TodoText>{data.item.title}</TodoText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
            renderHiddenItem={() =>{
                <ListViewHidden>
                    <HiddenButton>
                        <Entypo name="trash" size={25} color={colors.secondary} />
                    </HiddenButton>
                </ListViewHidden>
            }}
        />
    );
}

export default ListItems;
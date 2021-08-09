import React, {useState} from 'react';

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

    //For styling currently swiped todo row
    const [swipedRow, setSwipedRow] = useState(null);

    return (
        <SwipeListView
            data={todos}
            renderItem={(data) => {
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                return (
                    <ListView>
                        <>
                            <RowText>{data.item.title}</RowText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
            renderHiddenItem={() =>{
                return (
                    <ListViewHidden>
                        <HiddenButton>
                            <Entypo name="trash" size={25} color={colors.secondary} />
                        </HiddenButton>
                    </ListViewHidden>)
            }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            disableleftSwipe={true}
            showVerticalScrollIndicator={false}
            style={{
                flex: 1, paddingBottom: 30, marginBottom: 40
            }}
            onRowOpen={(rowKey) => {
                setSwipedRow(rowKey);
            }}
            onRowClose={()=>{
                setSwipedRow(null);
            }}
        />
    );
}

export default ListItems;
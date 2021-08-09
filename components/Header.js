import React from 'react';

//styled components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from "./../styles/appStyles";

// Icons
import {Entypo} from "@expo/vector-icons";

const Header = () => {
    return (
        <HeaderView>
            <HeaderTitle>Tennis App</HeaderTitle>
            <HeaderButton>
                <Entypo name="trash" size={25} color={colors.tertiary}/>
            </HeaderButton>
        </HeaderView>
    );
}

export default Header;
import React, {FC} from 'react';
import {ScrollView} from "react-native";
import styled from "styled-components";

interface ILayout {
    children: React.ReactNode
    isScrollView?: boolean
}

const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
    return (
        <StyledView>
            {isScrollView ?
                <ScrollView>{children}</ScrollView>
                :
                children
            }
        </StyledView>
    );
};

export default Layout;

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

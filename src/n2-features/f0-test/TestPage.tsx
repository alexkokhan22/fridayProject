import React from "react";
import styled from "styled-components"
import { StyledButton } from "../../n1-main/m1-ui/u1-common/styles/Button";
import SuperInputText from "../../n1-main/m1-ui/u1-common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../n1-main/m1-ui/u1-common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../n1-main/m1-ui/u1-common/SuperButton/SuperButton";

const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TestPageChildrenContainer = styled.div`
`

export const TestPage = () => {
    return (

        <TestPageContainer>
            <h3>Test Page</h3>
            {/*<StyledButton>button</StyledButton>*/}
            <TestPageChildrenContainer>
                <SuperInputText/>
                <SuperCheckbox/>
                <SuperButton/>
            </TestPageChildrenContainer>
        </TestPageContainer>
    )
}
import React from "react";
import styled from "styled-components";

import { ContextProvider } from "./context";
import { PersonalDetails, Address, Email } from "./input";
import {
    Address as AddressConf,
    PersonalDetails as PersonalDetailsConf,
    Email as EmailConf,
} from "./confirmation";
import { HighlightPanel } from "./highlight-panel";

const Main = styled.div`
    font-family: arial;
    font-size: 12px;
`;

const Hr = styled.hr`
    margin: 20px 0;
`;

export const App = () => {
    return (
        <Main>
            <HighlightPanel title="App">
                <ContextProvider>
                    <PersonalDetails />
                    <Address />
                    <Email />
                    <Hr />
                    <PersonalDetailsConf />
                    <AddressConf />
                    <EmailConf />
                </ContextProvider>
            </HighlightPanel>
        </Main>
    );
};

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

export const App = () => {
    return (
        <Main>
            <HighlightPanel title="App">
                <ContextProvider>
                    <PersonalDetails />
                    <Address />
                    <Email />
                    <PersonalDetailsConf />
                    <AddressConf />
                    <EmailConf />
                </ContextProvider>
            </HighlightPanel>
        </Main>
    );
};

import React from "react";
import styled from 'styled-components';

import { Name } from "./name";
import { LastName } from "./last-name";
import { HighlightPanel } from "../../highlight-panel";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const PersonalDetails: React.FC = () => {
    return (
        <HighlightPanel title="PersonalDetails">
            <Container>
                <Name />
                <LastName />
            </Container>
        </HighlightPanel>
    );
};

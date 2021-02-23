import React from "react";
import styled from 'styled-components';

import { Street } from "./street";
import { City } from "./city";
import { HighlightPanel } from "../../highlight-panel";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const Address: React.FC = () => {
    return (
        <HighlightPanel title="Address">
            <Container>
                <Street />
                <City />
            </Container>
        </HighlightPanel>
    );
};

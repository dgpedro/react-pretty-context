import React from "react";

import { Street } from "./street";
import { City } from "./city";
import { HighlightPanel } from "../../highlight-panel";

export const Address: React.FC = () => {
    return (
        <HighlightPanel title="Address">
            <Street />
            <City />
        </HighlightPanel>
    );
};

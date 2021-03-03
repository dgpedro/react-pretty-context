import React from "react";

import { Name } from "./name";
import { LastName } from "./last-name";
import { HighlightPanel } from "../../highlight-panel";

export const PersonalDetails: React.FC = () => {
    return (
        <HighlightPanel title="PersonalDetails">
            <Name />
            <LastName />
        </HighlightPanel>
    );
};

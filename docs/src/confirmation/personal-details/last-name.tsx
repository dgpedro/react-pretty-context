import React from "react";

import { useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const LastName: React.FC = () => {
    const lastName = useContextSelector((state) => state.personal.lastName);
    return (
        <HighlightPanel title="LastName">
            Last name: {lastName}
        </HighlightPanel>
    );
};

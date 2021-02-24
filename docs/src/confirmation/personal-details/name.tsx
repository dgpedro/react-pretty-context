import React from "react";

import { useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const Name: React.FC = () => {
    const name = useContextSelector((context) => context.personal.name);
    return (
        <HighlightPanel title="Name">
            Name: {name}
        </HighlightPanel>
    );
};

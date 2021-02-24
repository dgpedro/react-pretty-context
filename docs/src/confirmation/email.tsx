import React from "react";

import { useContextSelector } from "../context";
import { HighlightPanel } from "../highlight-panel";

export const Email: React.FC = () => {
    const email = useContextSelector((context) => context.email);
    return (
        <HighlightPanel title="Email">
            Email: {email}
        </HighlightPanel>
    );
};

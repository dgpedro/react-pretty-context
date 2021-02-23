import React from "react";

import { useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const Street: React.FC = () => {
    const street = useContextSelector((state) => state.address.street);
    return (
        <HighlightPanel title="Street">
            Street: {street}
        </HighlightPanel>
    );
};

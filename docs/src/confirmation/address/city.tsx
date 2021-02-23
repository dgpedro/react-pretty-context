import React from "react";

import { useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const City: React.FC = () => {
    const city = useContextSelector((state) => state.address.city);
    return (
        <HighlightPanel title="City">
            City: {city}
        </HighlightPanel>
    );
};

import React from "react";

import { useActions, useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const Street: React.FC = () => {
    const street = useContextSelector((context) => context.address.street);
    const { setAddress } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ street: ev.target.value });
    };
    return (
        <HighlightPanel title="Street">
            Street: <input type="text" value={street} onChange={onChange} />
        </HighlightPanel>
    );
};

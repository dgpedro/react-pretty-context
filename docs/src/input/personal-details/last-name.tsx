import React from "react";

import { useActions, useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const LastName: React.FC = () => {
    const lastName = useContextSelector((state) => state.personal.lastName);
    const { setLastName } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(ev.target.value);
    };
    return (
        <HighlightPanel title="LastName">
            Last name: <input type="text" value={lastName} onChange={ onChange } />
        </HighlightPanel>
    );
};

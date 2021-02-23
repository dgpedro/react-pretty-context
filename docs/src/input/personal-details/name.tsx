import React from "react";

import { useActions, useContextSelector } from "../../context";
import { HighlightPanel } from "../../highlight-panel";

export const Name: React.FC = () => {
    const name = useContextSelector((state) => state.personal.name);
    const { setName } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setName(ev.target.value);
    };
    return (
        <HighlightPanel title="Name">
            Name: <input type="text" value={name} onChange={ onChange } />
        </HighlightPanel>
    );
};

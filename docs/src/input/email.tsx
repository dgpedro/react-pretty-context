import React from "react";

import { useActions, useContextSelector } from "../context";
import { HighlightPanel } from "../highlight-panel";

export const Email: React.FC = () => {
    const email = useContextSelector((state) => state.email);
    const { setEmail } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(ev.target.value);
    };

    return (
        <HighlightPanel title="Email">
            Email: <input type="text" value={email} onChange={onChange} />
        </HighlightPanel>
    );
};

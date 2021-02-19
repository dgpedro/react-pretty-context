import React from "react";

import { useActions, useContextSelector } from "../../context";

export const Name: React.FC = () => {
    const name = useContextSelector((state) => state.personal.name);
    const { setName } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setName(ev.target.value);
    };
    return (
        <div>
            Name: <input type="text" value={name} onChange={ onChange } />
        </div>
    );
};

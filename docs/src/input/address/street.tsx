import React from "react";

import { useActions, useContextSelector } from "../../context";

export const Street: React.FC = () => {
    const street = useContextSelector((state) => state.address.street);
    const { setAddress } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ street: ev.target.value });
    };
    return (
        <div>
            Street: <input type="text" value={street} onChange={onChange} />
        </div>
    );
};

import React from "react";

import { useActions, useContextSelector } from "../../context";

export const City: React.FC = () => {
    const city = useContextSelector((state) => state.address.city);
    const { setAddress } = useActions();

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ city: ev.target.value });
    };
    return (
        <div>
            City: <input type="text" value={city} onChange={onChange} />
        </div>
    );
};

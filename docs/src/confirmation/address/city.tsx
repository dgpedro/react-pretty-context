import React from "react";

import { useContextSelector } from "../../context";

export const City: React.FC = () => {
    const city = useContextSelector((state) => state.address.city);
    return (
        <div>
            City: {city}
        </div>
    );
};

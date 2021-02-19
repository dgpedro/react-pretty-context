import React from "react";

import { useContextSelector } from "../../context";

export const Street: React.FC = () => {
    const street = useContextSelector((state) => state.address.street);
    return (
        <div>
            Street: {street}
        </div>
    );
};

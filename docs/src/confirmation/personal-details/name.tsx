import React from "react";

import { useContextSelector } from "../../context";

export const Name: React.FC = () => {
    const name = useContextSelector((state) => state.personal.name);
    return (
        <div>
            Name: {name}
        </div>
    );
};

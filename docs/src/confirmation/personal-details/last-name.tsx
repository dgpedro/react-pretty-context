import React from "react";

import { useContextSelector } from "../../context";

export const LastName: React.FC = () => {
    const lastName = useContextSelector((state) => state.personal.lastName);
    return (
        <div>
            Last name: {lastName}
        </div>
    );
};

import React from "react";

import { useContextSelector } from "./config";

export const LastName: React.FC = () => {
    const lastName = useContextSelector(({ lastName }) => lastName);
    return <div data-testid="last-name">{lastName}</div>;
};

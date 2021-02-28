import React from "react";

import { useContextSelector } from "./config";

export const Street: React.FC = () => {
    const street = useContextSelector(({ street }) => street);
    return <div data-testid="street">{street}</div>;
};

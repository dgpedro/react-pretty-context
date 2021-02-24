import React from "react";

import { useContextSelector } from "./config";

export const FirstName: React.FC = () => {
    const firstName = useContextSelector(({ firstName }) => firstName);
    return <div data-testid="first-name">{firstName}</div>;
};

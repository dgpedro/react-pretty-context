import React from "react";

import { useContextSelector } from "./config";

export const PostalCode: React.FC = () => {
    const postalCode = useContextSelector(({ postalCode }) => postalCode);
    return <div data-testid="postal-code">{postalCode}</div>;
};

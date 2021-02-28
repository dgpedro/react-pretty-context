import React from "react";

import { Street } from "./street";
import { PostalCode } from "./portal-code";

export const AddressContainer: React.FC = () => {
    return (
        <div>
            <Street />
            <PostalCode />
        </div>
    );
};

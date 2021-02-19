import React from "react";

import { Street } from "./street";
import { City } from "./city";

export const Address: React.FC = () => {
    return (
        <div>
            <Street />
            <City />
        </div>
    );
};

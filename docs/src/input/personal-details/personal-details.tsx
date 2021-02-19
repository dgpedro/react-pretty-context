import React from "react";

import { Name } from "./name";
import { LastName } from "./last-name";

export const PersonalDetails: React.FC = () => {
    return (
        <div>
            <Name />
            <LastName />
        </div>
    );
};

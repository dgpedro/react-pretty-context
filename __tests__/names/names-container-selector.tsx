import React from "react";

import { UpdateCallback, UpdateCallbackProps } from "./update-callback";
import { useContextSelector } from "./config";

export const NamesContainerSelector: React.FC<UpdateCallbackProps> = ({ children, ...props }) => {
    const firstName = useContextSelector((context) => context.firstName);
    const lastName = useContextSelector((context) => context.lastName);

    return (
        <div>
            <UpdateCallback {...props} />
            {children}
            <div>{firstName}</div>
            <div>{lastName}</div>
        </div>
    );
};

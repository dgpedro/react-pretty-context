import React from "react";

import { useContextSelector } from "./config";
import { UpdateCallback, UpdateCallbackProps } from "./update-callback";

export const LastName: React.FC<UpdateCallbackProps> = (props) => {
    const lastName = useContextSelector(({ lastName }) => lastName);
    return (
        <>
            <UpdateCallback {...props} />
            <div data-testid="last-name">{lastName}</div>
        </>
    );
};

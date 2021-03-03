import React from "react";

import { useContextSelector } from "./config";
import { UpdateCallback, UpdateCallbackProps } from "./update-callback";

export const FirstName: React.FC<UpdateCallbackProps> = (props) => {
    const firstName = useContextSelector(({ firstName }) => firstName);
    return (
        <>
            <UpdateCallback {...props} />
            <div data-testid="first-name">{firstName}</div>
        </>
    );
};

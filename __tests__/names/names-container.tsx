import React from "react";

import { UpdateCallback, UpdateCallbackProps } from "./update-callback";

export const NamesContainer: React.FC<UpdateCallbackProps> = ({ children, ...props }) => {
    return (
        <div>
            <UpdateCallback {...props} />
            {children}
        </div>
    );
};

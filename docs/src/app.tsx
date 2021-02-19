import React from "react";

import { ContextProvider } from "./context";
import { PersonalDetails, Address } from "./input";
import { Address as AddressConf, PersonalDetails as PersonalDetailsConf } from "./confirmation";

export const App = () => {
    return (
        <ContextProvider>
            <PersonalDetails />
            <Address />
            <hr />
            <PersonalDetailsConf />
            <AddressConf />
        </ContextProvider>
    );
};

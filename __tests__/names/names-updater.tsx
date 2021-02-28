import React from "react";

import { useActions } from "./config";

export const NamesUpdater: React.FC = () => {
    const { setFirstName, setLastName, setNames } = useActions();

    const onFirstNameUpdate = () => {
        setFirstName("Updated first name");
    };

    const onLastNameUpdate = () => {
        setLastName("Updated last name");
    };

    const onNamesUpdate = () => {
        setNames({ firstName: "Updated first name", lastName: "Updated last name" });
    };

    return (
        <div>
            <button onClick={onFirstNameUpdate} type="button">Update first name</button>
            <button onClick={onLastNameUpdate} type="button">Update last name</button>
            <button onClick={onNamesUpdate} type="button">Update names</button>
        </div>
    );
};

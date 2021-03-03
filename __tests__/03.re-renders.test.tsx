import React from "react";
import { render, fireEvent } from "test-utils";

import {
    NamesProvider,
    NamesContainer,
    NamesContainerSelector,
    NamesUpdater,
    FirstName,
    LastName,
} from "./names";

describe("Re-renders", () => {
    it("Container update", () => {
        const updateHandler = jest.fn();

        const { getByRole } = render(
            <NamesProvider>
                <NamesContainer onUpdate={updateHandler}>
                    <FirstName onUpdate={updateHandler} />
                    <LastName onUpdate={updateHandler} />
                </NamesContainer>
                <NamesUpdater />
            </NamesProvider>
        );

        const firstNameButton = getByRole(/button/i, { name: /update first name/i });
        const lastNameButton = getByRole(/button/i, { name: /update last name/i });
        const namesButton = getByRole(/button/i, { name: /update names/i });

        fireEvent.click(firstNameButton);
        fireEvent.click(lastNameButton);
        fireEvent.click(namesButton);

        expect(updateHandler).toHaveBeenCalledTimes(2);
    });
    it("Container selector update", () => {
        const updateHandler = jest.fn();

        const { getByRole } = render(
            <NamesProvider>
                <NamesContainerSelector onUpdate={updateHandler}>
                    <FirstName onUpdate={updateHandler} />
                    <LastName onUpdate={updateHandler} />
                </NamesContainerSelector>
                <NamesUpdater />
            </NamesProvider>
        );

        const firstNameButton = getByRole(/button/i, { name: /update first name/i });
        const lastNameButton = getByRole(/button/i, { name: /update last name/i });
        const namesButton = getByRole(/button/i, { name: /update names/i });

        fireEvent.click(firstNameButton);
        fireEvent.click(lastNameButton);
        fireEvent.click(namesButton);

        expect(updateHandler).toHaveBeenCalledTimes(4);
    });
    it("Container selector update sequentially", () => {
        const updateHandler = jest.fn();

        const { getByRole } = render(
            <NamesProvider>
                <NamesContainerSelector onUpdate={updateHandler}>
                    <FirstName onUpdate={updateHandler} />
                    <LastName onUpdate={updateHandler} />
                </NamesContainerSelector>
                <NamesUpdater />
            </NamesProvider>
        );

        const button = getByRole(/button/i, { name: /update sequentially/i });

        fireEvent.click(button);

        expect(updateHandler).toHaveBeenCalledTimes(3);
    });
});

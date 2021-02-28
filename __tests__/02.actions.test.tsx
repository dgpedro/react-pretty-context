import React from "react";
import { render, fireEvent } from "test-utils";

import { NamesProvider } from "./names/config";
import { NamesContainer } from "./names/names-container";
import { NamesUpdater } from "./names/names-updater";

import { AddressProvider } from "./address/config";
import { AddressContainer } from "./address/address-container";

describe("Actions dispatcher", () => {
    it("Single action, one value", () => {
        const { getByTestId, getByRole } = render(
            <NamesProvider initialContext={{ firstName: "first name", lastName: "last name" }}>
                <NamesContainer />
                <NamesUpdater />
            </NamesProvider>
        );

        const firstNameButton = getByRole(/button/i, { name: /update first name/i });
        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        fireEvent.click(firstNameButton);

        expect(firstName).toHaveTextContent(/^updated first name$/i);
        expect(lastName).toHaveTextContent(/^last name$/i);
    });

    it("Single action, multiple values", () => {
        const { getByTestId, getByRole } = render(
            <NamesProvider initialContext={{ firstName: "first name", lastName: "last name" }}>
                <NamesContainer />
                <NamesUpdater />
            </NamesProvider>
        );

        const namesButton = getByRole(/button/i, { name: /update names/i });
        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        fireEvent.click(namesButton);

        expect(firstName).toHaveTextContent(/^updated first name$/i);
        expect(lastName).toHaveTextContent(/^updated last name$/i);
    });

    it("Multiple actions", () => {
        const { getByTestId, getByRole } = render(
            <NamesProvider>
                <NamesContainer />
                <NamesUpdater />
            </NamesProvider>
        );

        const firstNameButton = getByRole(/button/i, { name: /update first name/i });
        const lastNameButton = getByRole(/button/i, { name: /update last name/i });
        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        fireEvent.click(firstNameButton);
        fireEvent.click(lastNameButton);

        expect(firstName).toHaveTextContent(/^updated first name$/i);
        expect(lastName).toHaveTextContent(/^updated last name$/i);
    });

    it("Multiple intances same context", () => {
        const { getAllByTestId, getByRole } = render(
            <>
                <NamesProvider initialContext={{ firstName: "first name 1", lastName: "last name 1" }}>
                    <NamesContainer />
                </NamesProvider>
                <NamesProvider initialContext={{ firstName: "first name 2", lastName: "last name 2" }}>
                    <NamesContainer />
                    <NamesUpdater />
                    <NamesProvider initialContext={{ firstName: "first name 3", lastName: "last name 3" }}>
                        <NamesContainer />
                    </NamesProvider>
                </NamesProvider>
            </>
        );

        const firstNameButton = getByRole(/button/i, { name: /update first name/i });
        const lastNameButton = getByRole(/button/i, { name: /update last name/i });
        const firstName = getAllByTestId("first-name");
        const lastName = getAllByTestId("last-name");

        fireEvent.click(firstNameButton);
        fireEvent.click(lastNameButton);

        expect(firstName[0]).toHaveTextContent(/^first name 1$/i);
        expect(lastName[0]).toHaveTextContent(/^last name 1$/i);
        expect(firstName[1]).toHaveTextContent(/^updated first name$/i);
        expect(lastName[1]).toHaveTextContent(/^updated last name$/i);
        expect(firstName[2]).toHaveTextContent(/^first name 3$/i);
        expect(lastName[2]).toHaveTextContent(/^last name 3$/i);
    });

    it("Multiple contexts", () => {
        const { getByTestId, getByRole } = render(
            <NamesProvider>
                <AddressProvider initialContext={{ street: "Initial street", postalCode: "Initial postal code" }}>
                    <NamesContainer />
                    <NamesUpdater />
                    <AddressContainer />
                </AddressProvider>
            </NamesProvider>
        );

        const namesButton = getByRole(/button/i, { name: /update names/i });
        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");
        const street = getByTestId("street");
        const postalCode = getByTestId("postal-code");

        fireEvent.click(namesButton);

        expect(firstName).toHaveTextContent(/^updated first name$/i);
        expect(lastName).toHaveTextContent(/^updated last name$/i);
        expect(street).toHaveTextContent(/^initial street$/i);
        expect(postalCode).toHaveTextContent(/^initial postal code$/i);
    });
});

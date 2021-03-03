import React from "react";
import { render } from "test-utils";

import { NamesProvider, defaultContext, NamesContainer, FirstName, LastName } from "./names";

describe("Initial values", () => {
    it("Default context", () => {
        const { getByTestId } = render(
            <NamesProvider>
                <NamesContainer>
                    <FirstName />
                    <LastName />
                </NamesContainer>
            </NamesProvider>
        );

        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        expect(firstName).toHaveTextContent(defaultContext.firstName);
        expect(lastName).toHaveTextContent(defaultContext.lastName);
    });

    it("Initial context", () => {
        const { getByTestId } = render(
            <NamesProvider initialContext={{ firstName: "Initial first name", lastName: "Initial last name" }}>
                <NamesContainer>
                    <FirstName />
                    <LastName />
                </NamesContainer>
            </NamesProvider>
        );

        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        expect(firstName).toHaveTextContent(/^initial first name$/i);
        expect(lastName).toHaveTextContent(/^initial last name$/i);
    });

    it("Default and initial context", () => {
        const { getAllByTestId } = render(
            <NamesProvider>
                <NamesProvider initialContext={{ firstName: "Initial first name", lastName: "Initial last name" }}>
                    <NamesContainer>
                        <FirstName />
                        <LastName />
                    </NamesContainer>
                </NamesProvider>
                <FirstName />
                <LastName />
            </NamesProvider>
        );

        const firstNames = getAllByTestId("first-name");
        const lastNames = getAllByTestId("last-name");

        expect(firstNames[0]).toHaveTextContent(/^initial first name$/i);
        expect(lastNames[0]).toHaveTextContent(/^initial last name$/i);
        expect(firstNames[1]).toHaveTextContent(defaultContext.firstName);
        expect(lastNames[1]).toHaveTextContent(defaultContext.lastName);
    });
});

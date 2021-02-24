import React from "react";
import { render } from "test-utils";

import { ContextProvider } from "./names/config";
import { defaultContext } from "./names/context-state";
import { StaticContainer } from "./names/static-container";

describe("Initial values", () => {
    it("Default context", () => {
        const { getByTestId } = render(
            <ContextProvider>
                <StaticContainer />
            </ContextProvider>
        );

        const firstName = getByTestId("first-name");
        const lastName = getByTestId("last-name");

        expect(firstName).toHaveTextContent(defaultContext.firstName);
        expect(lastName).toHaveTextContent(defaultContext.lastName);
    });
});

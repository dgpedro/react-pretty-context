import { createContext } from "@src";

import { defaultContext } from "./context-state";
import { actions } from "./actions";

export const { ContextProvider: NamesProvider, useContextSelector, useActions } = createContext({
    actions,
    defaultContext,
    displayName: "Tests",
});
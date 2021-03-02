import { createContext } from "@src";

interface Context {
    firstName: string;
    lastName: string;
}

export const defaultContext: Context = {
    firstName: "Default first name",
    lastName: "Default last name",
};

export const actions = {
    setFirstName: (context: Context, firstName: string) => {
        return { ...context, firstName };
    },
    setLastName: (context: Context, lastName: string) => {
        return { ...context, lastName };
    },
    setNames: (context: Context, names: Partial<Context>) => {
        return { ...context, ...names };
    }
};

export const { ContextProvider: NamesProvider, useContextSelector, useActions } = createContext({
    actions,
    defaultContext,
    displayName: "Tests",
});
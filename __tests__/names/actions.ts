import { ContextState } from "./context-state";

export const actions = {
    setFirstName: (context: ContextState, firstName: string) => {
        return { ...context, firstName };
    },
    setLastName: (context: ContextState, lastName: string) => {
        return { ...context, lastName };
    },
    setNames: (context: ContextState, names: Partial<ContextState>) => {
        return { ...context, ...names };
    }
};
